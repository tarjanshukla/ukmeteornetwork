const aws = require('aws-sdk');
const JSZip = require('jszip');
const xmlParser = require('fast-xml-parser');

const s3 = new aws.S3();
const dynamodb = new aws.DynamoDB({apiVersion: '2012-08-10'});

const prefix = process.env.BACKUP_PREFIX || 'backup';
const dstBucket = process.env.DST_BUCKET || 'ukmon-archive';
const imageBaseUrl = process.env.IMAGE_BASE_URL || 'https://archive.ukmeteornetwork.co.uk';
const meteorTable = process.env.DYNAMODB_METEOR_TABLE || 'meteor';
const countTable = process.env.DYNAMODB_COUNT_TABLE || 'count';
const stationTable = process.env.DYNAMODB_STATION_TABLE || 'station';
const yearTable = process.env.DYNAMODB_YEAR_TABLE || 'year';

exports.handler = (event, context, callback) => {
  const jszip = new JSZip();
  const bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;
  const stationInfo = {
    name: '',
    year: '',
    month: '',
    meteorList: []
  };

  getInfoFromKey(key);

  loadZip(bucket, key)
    .then(zip => processFiles(zip))
    .then(promises => Promise.all(promises))
    .then(() => updateDB())
    .then(() => callback(null))
    .catch(err => callback(err));

  function getInfoFromKey(key) {
    const filename = key.split('/').pop().split('.').shift();
    const stationName = filename.split('_');
    const date = stationName.shift();
    stationInfo.name = stationName.join(' ');
    stationInfo.year = date.substr(0, 4);
    stationInfo.month = date.substr(4);
  }

  function loadZip(bucket, key) {
    return new Promise((resolve, reject) => {
      const params = {
        Bucket: bucket,
        Key: key
      };
      s3.getObject(params, (err, data) => {
        if (err) {
          return reject(err);
        }

        if (data.ContentType !== 'application/zip' && data.ContentType !== 'application/x-zip-compressed' && data.ContentType !== 'application/zip-compressed' && data.ContentType !== 'multipart/x-zip' && data.ContentType !== 'application/octet-stream') {
          return reject('Unsupported file type');
        }

        resolve(jszip.loadAsync(data.Body));
      });
    });
  }

  function processFiles(zip) {
    const promises = [];
    const files = Object.keys(zip.files).filter(key => !zip.files[key].dir);
    let station = stationInfo.name.split(' ');
    const stationNumber = station.pop();
    station = station.join(' ');
    const newFilePrefix = `${prefix}/${station.toLowerCase()}/${stationNumber.toLowerCase()}/${stationInfo.year}/`;

    files.forEach(key => {
      const file = zip.files[key];
      const newFileName = newFilePrefix + file.name;

      if (key.includes('A.XML')) {
        promises.push(processXML(file, newFileName));
      }

      const promise = file.async('nodebuffer')
        .then(content => {
          var params = {
            Bucket: dstBucket,
            Key: newFileName,
            Body: content
          };
          return new Promise((resolve, reject) => {
            s3.putObject(params,(err) => {
              if (err) {
                return reject(err);
              }
              resolve();
            });
          });
        });

      promises.push(promise);
    });

    return promises;
  }

  function processXML(file, newFileName) {
    return file.async('text').then(xmlString => {
      if (!xmlParser.validate(xmlString)) {
        return Promise.reject(`Invalid xml file ${file.name.split('/').pop()}`);
      }

      const parsedData = xmlParser.parse(xmlString, {attrPrefix: '', ignoreNonTextNodeAttr: false});
      const meteorData1 = parsedData.ufoanalyzer_record;
      const meteorData2 = parsedData.ufoanalyzer_record.ua2_objects.ua2_object;
      let {clip_name, cam, lens, rstar, y, mo, d, h, m, s} = meteorData1;
      let {mag, sec, av, Vo, h1, h2, len} = meteorData2;
      let unixtime = Math.round(new Date(y, +mo - 1, d, h, m, s).getTime() / 1000);
      let image_url = `${imageBaseUrl}/${newFileName.replace('A.XML', 'P.jpg')}`;

      stationInfo.meteorList.push({
        PutRequest: {
          Item: {
            clip_name: {
              S: clip_name
            },
            station: {
              S: stationInfo.name
            },
            mag: {
              S: mag
            },
            cam: {
              S: cam
            },
            lens: {
              S: lens
            },
            rstar: {
              S: rstar
            },
            sec: {
              S: sec
            },
            av: {
              S: av
            },
            vo: {
              S: Vo
            },
            h1: {
              S: h1
            },
            h2: {
              S: h2
            },
            len: {
              S: len
            },
            'class': {
              S: meteorData2['class']
            },
            image_url: {
              S: image_url
            },
            unixtime: {
              N: unixtime.toString()
            }
          }
        }
      });
    });
  }

  function updateDB() {
    const meteorCount = stationInfo.meteorList.length;

    return Promise.all([
      updateMeteorTable(),
      updateCountTable(meteorCount),
      updateYearTable(),
      updateStationTable()
    ]);
  }

  function updateMeteorTable() {
    return new Promise((resolve, reject) => {
      batchWrite();

      function batchWrite(err) {
        if (err) {
          return reject(err);
        }

        if (stationInfo.meteorList.length) {
          return dynamodb.batchWriteItem({
            RequestItems: {
              [meteorTable]: stationInfo.meteorList.splice(0, 25)
            }
          }, batchWrite);
        }

        resolve();
      }
    });
  }

  function updateCountTable(meteorCount) {
    const params = {
      TableName: countTable,
      Item: {
        id: {
          S: `${stationInfo.name}_${stationInfo.year}_${stationInfo.month}`
        },
        station: {
          S: stationInfo.name
        },
        year: {
          S: stationInfo.year
        },
        month: {
          S: stationInfo.month
        },
        count: {
          S: meteorCount.toString()
        }
      }
    };

    return putItem(params);
  }

  function updateYearTable() {
    const params = {
      TableName: yearTable,
      Item: {
        year: {
          S: stationInfo.year
        }
      }
    };

    return putItem(params);
  }

  function updateStationTable() {
    const params = {
      TableName: stationTable,
      Item: {
        station: {
          S: stationInfo.name
        }
      }
    };

    return putItem(params);
  }

  function putItem(params) {
    return new Promise((resolve, reject) => {
      dynamodb.putItem(params, function (err) {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  }

};
