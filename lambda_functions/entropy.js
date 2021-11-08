const crypto = require("crypto");
const {"v4": uuidv4} = require('uuid');

exports.randomBytes = async function (event) {

    console.log("getGuid request:", JSON.stringify(event, undefined, 2));

    var id = crypto.randomBytes(20).toString('hex');

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: `${id}`
    };
};

exports.getGuid = async function (event) {

    console.log("getGuid request:", JSON.stringify(event, undefined, 2));
    
    var id = uuidv4();

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: `${id}`
    };
};
