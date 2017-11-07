const aws = require('aws-sdk');
const dynamodb = new aws.DynamoDB.DocumentClient();

const meteorTable = process.env.DYNAMODB_METEOR_TABLE || 'meteor';
const pageSize = +process.env.PAGE_SIZE || 24;
const segments = +process.env.SEGMENTS || 10;

exports.handler = (event, context, callback) => {
  let {
    clip_name = '',
    station = '',
    start = '',
    end = '',
    class_name = '',
    order = '',
    page = 1
  } = event.params.querystring;
  const offset = (+page - 1) * pageSize;
  let filters = [];
  let attributeNames = {};
  let attributeValues = {};

  if (clip_name) {
    filters.push('contains(#cnn, :cnv)');
    attributeNames['#cnn'] = 'clip_name';
    attributeValues[':cnv'] = clip_name;
  }

  if (station) {
    filters.push('#sn = :sv');
    attributeNames['#sn'] = 'station';
    attributeValues[':sv'] = station;
  }

  if (start) {
    filters.push('(#un between :start and :end)');
    attributeNames['#un'] = 'unixtime';
    attributeValues[':start'] = +start;
    attributeValues[':end'] = +end;
  }

  if (class_name) {
    filters.push('#cln = :clv');
    attributeNames['#cln'] = 'class';
    attributeValues[':clv'] = class_name;
  }

  const query = {
    TableName: meteorTable,
    TotalSegments: segments
  };

  if (filters.length) {
    query.FilterExpression = filters.join(' and ');
    query.ExpressionAttributeNames = attributeNames;
    query.ExpressionAttributeValues = attributeValues;
  }

  const promises = [];

  for (let i = 0; i < segments; ++i) {
    promises.push(getItems(i));
  }

  Promise.all(promises)
    .then(res => {
      const result = res.reduce((a, b) => a.concat(b));
      if (order) {
        sort(result, order);
      }

      const count = result.length;
      const meteorList = result.splice(offset, pageSize);
      callback(null, {meteorList, count});
    })
    .catch(err => callback(err));

  function getItems(segment) {
    let results = [];
    const localQuery = Object.assign({}, query, {Segment: segment});

    return new Promise((resolve, reject) => {
      dynamodb.scan(localQuery, process);

      function process(err, data) {
        if (err) {
          return reject(err);
        }

        results = [...results, ...data.Items];

        if (data.LastEvaluatedKey) {
          localQuery.ExclusiveStartKey = data.LastEvaluatedKey;
          dynamodb.scan(localQuery, process);
        } else {
          resolve(results);
        }
      }
    });
  }

  function sort(array, param) {
    let [key, direction] = param.split(':');
    direction = (direction === 'asc') ? 1 : -1;
    array.sort((elA, elB) => {
      const a = +elA[key];
      const b = +elB[key];
      return direction * ((a > b) - (b > a));
    });
  }

};
