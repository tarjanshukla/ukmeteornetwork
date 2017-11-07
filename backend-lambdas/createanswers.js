var AWS = require("aws-sdk");
var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var paramsBody = event.body;
    var event = paramsBody.event;
    var description = paramsBody.description;
    var files = paramsBody.files || "";
    var username = paramsBody.username;
    var d_date = new Date().getTime().toString();
    var params = {
        TableName: process.env.TABLE_NAME || "answers",
        Item: {
            "event": event,
            "description": description,
            "files": files,
            "username": username,
            "d_date": d_date
        }
    };
    // docClient.put(params,(err, url) => callback(err, {url}));
    docClient.put(params,function(err,url) {
        if ( err ) {
            console.log(err);
            callback(null,{state:false});
        } else {
            callback(null,{state:true});
        }
    })
};
