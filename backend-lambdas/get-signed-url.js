const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const prefix = process.env.PREFIX || 'upload';
const bucket = process.env.BUCKET || 'ukmon-archive';
const acl = process.env.ACL || 'public-read';

exports.handler = (event, context, callback) => {
  const {name, type} = event.params.querystring;
  if (!name || !type) {
    callback({message: 'Parameters name and type are required'});
  }

  const params = {
    Bucket: bucket,
    Key: `${prefix}/${name}`,
    Expires: 3600,
    ACL: acl,
    ContentType: type
  };

  s3.getSignedUrl('putObject', params, (err, url) => callback(err, {url}));
};
