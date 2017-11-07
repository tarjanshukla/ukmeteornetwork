const aws = require('aws-sdk');
const dynamodb = new aws.DynamoDB.DocumentClient();

const countTable = process.env.DYNAMODB_COUNT_TABLE || 'count';
const stationTable = process.env.DYNAMODB_STATION_TABLE || 'station';
const yearTable = process.env.DYNAMODB_YEAR_TABLE || 'year';

exports.handler = (event, context, callback) => {
  Promise.all([
    getCountList(),
    getStationList(),
    getYearList()
  ]).then(data => {
    const [count, station, year] = data;
    callback(null, {count, station, year});
  }).catch(err => callback(err));

  function getCountList() {
    return getData(countTable);
  }

  function getStationList() {
    return getData(stationTable).then(list => list.map(item => item.station));
  }

  function getYearList() {
    return getData(yearTable).then(list => list.map(item => item.year).sort().reverse());
  }

  function getData(table) {
    return new Promise((resolve, reject) => {
      let list = [];
      const query = {TableName: table};
      dynamodb.scan(query, process);

      function process(err, data) {
        if (err) {
          return reject(err);
        }

        list = [...list, ...data.Items];

        if (data.LastEvaluatedKey) {
          query.ExclusiveStartKey = data.LastEvaluatedKey;
          dynamodb.scan(query, process);
        } else {
          resolve(list);
        }
      }
    });
  }
};
