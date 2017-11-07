const aws = require('aws-sdk');
const dynamodb = new aws.DynamoDB.DocumentClient();

const stationTable = process.env.DYNAMODB_STATION_TABLE || 'station';

exports.handler = (event, context, callback) => {
  let stationList = [];
  let query = {TableName: stationTable};
  dynamodb.scan(query, process);

  function process(err, data) {
    if (err) {
      callback(err);
      return;
    }

    data.Items.forEach(item => stationList.push(item.station));

    if (data.LastEvaluatedKey) {
      query.ExclusiveStartKey = data.LastEvaluatedKey;
      dynamodb.scan(query, process);
    } else {
      callback(null, stationList);
    }
  }
};
