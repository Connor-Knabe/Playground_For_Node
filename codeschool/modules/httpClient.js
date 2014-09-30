var http = require('http');

var makeRequest = function(message){
	var options = {
		host: 'localhost',
		port: 1337,
		parth: '/',
		method: 'POST'
	}
	var request = http.request(options,function(response){
		response.on('data',function(data){
			console.log(data);

		});

	});

	request.write(message);
	request.end();
};

makeRequest("HeY");




