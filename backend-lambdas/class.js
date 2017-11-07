const aws = require('aws-sdk');
const dynamodb = new aws.DynamoDB.DocumentClient();

const classTable = process.env.DYNAMODB_CLASS_TABLE || 'class';

exports.handler = (event, context, callback) => {
  let classList = [];
  let query = {TableName: classTable};
  dynamodb.scan(query, process);

  function process(err, data) {
    if (err) {
      callback(err);
      return;
    }

    classList = [...classList, ...data.Items];

    if (data.LastEvaluatedKey) {
      query.ExclusiveStartKey = data.LastEvaluatedKey;
      dynamodb.scan(query, process);
    } else {
      callback(null, classList);
    }
  }
};
