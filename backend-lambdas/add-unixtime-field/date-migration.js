const aws = require('aws-sdk');
const dynamodb = new aws.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
  const query = {
    TableName: 'meteor',
    FilterExpression: 'attribute_not_exists(unixtime)'
  };
  let count = 0;

  dynamodb.scan(query, process);

  function process(err, data) {
    if (err) {
      callback(err);
      return;
    }

    const res = data.Items.map(item => {
      let [date, time] = item.time.split(' ');
      let [dd, MM, yyyy] = date.split('/');
      let [hh, mm, ss] = time.split(':');
      item.unixtime = Math.floor(new Date(yyyy, MM - 1, dd, hh, mm, ss).getTime() / 1000);
      return updateItem(item);
    });

    Promise.all(res)
      .then(() => {
        count+= res.length;

        if (data.LastEvaluatedKey) {
          query.ExclusiveStartKey = data.LastEvaluatedKey;
          dynamodb.scan(query, process);
        } else {
          callback(null, {count});
        }
      })
      .catch(err => callback(err));
  }

  function updateItem(item) {
    const params = {
      TableName: 'meteor',
      Key: {clip_name: item.clip_name},
      UpdateExpression: `set unixtime = :u`,
      ExpressionAttributeValues: {
        ':u': item.unixtime
      }
    };

    return new Promise((res, rej) => {
      dynamodb.update(params, (err, data) => {
        if (err) {
          rej(err);
          return;
        }

        res(data);
      });
    });
  }
};
