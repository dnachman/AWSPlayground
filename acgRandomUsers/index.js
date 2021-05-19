exports.handler = async (event) => {
	// TODO implement
	
	const AWS = require('aws-sdk');

	const client = new AWS.S3({region: 'us-east-1'});
	
	const data = await client.listObjectsV2({Bucket: 'acg-logicalenigma-2021'}).promise();
	
	var output = data.Contents;
	
	console.log(JSON.stringify(data));
	
	const response = {
			statusCode: 200,
			body: JSON.stringify(output),
			headers: {"Access-Control-Allow-Origin": "*"},
	};
	return response;
};