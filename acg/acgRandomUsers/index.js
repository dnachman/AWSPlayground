exports.handler = async (event) => {
	
	const AWS = require('aws-sdk');

	const client = new AWS.S3({region: 'us-east-1'});
	
	const envBucket = process.env.Bucket;
	
	const data = await client.listObjectsV2({
		Bucket: envBucket,
		Prefix: 'lambda-example/random-users-data/users'
	}).promise();
	
	//console.log('DATA: ' + JSON.stringify(data));
	
	let output = [];
	
	for(const keyData of data.Contents) {
		console.log('Key: ' + keyData.Key);
		// grab the object and add it to the 
		const fileData = await client.getObject({
			Bucket: envBucket,
			Key: keyData.Key
		}).promise();
		const fileJson = JSON.parse(fileData.Body.toString());
		for(const user of fileJson) {
			output.push(user);
			//console.log('USER: ' + user.name.last);
		}
		// const fileJson = JSON.parse(fileData);
		// output.append(fileJson);
	}
	
	const response = {
			statusCode: 200,
			body: JSON.stringify(output),
			headers: {"Access-Control-Allow-Origin": "*"},
	};
	return response;
};