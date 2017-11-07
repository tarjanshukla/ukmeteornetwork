const aws = require('aws-sdk');
const dynamodb = new aws.DynamoDB({apiVersion: '2012-08-10'});

exports.handler = (event, context, callback) => {
  const classList = [];

  event.forEach((item) => {
    classList.push({
      PutRequest: {
        Item: {
          id: {
            S: item.name.split('-').pop().trim()
          },
          name: {
            S: item.name
          }
        }
      }
    });
  });

  classList.sort((itemA, itemB) => {
    const a = itemA.PutRequest.Item.id.S;
    const b = itemB.PutRequest.Item.id.S;
    return (a > b) - (b > a);
  });

  batchWrite();

  function batchWrite(err) {
    if (err) {
      callback(err);
      return;
    }

    if (classList.length) {
      dynamodb.batchWriteItem({
        RequestItems: {
          'class': classList.splice(0, 25)
        }
      }, batchWrite);
      return;
    }

    callback(null, 'ok');
  }
};
