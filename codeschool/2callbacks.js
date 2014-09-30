var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200);
	console.log("Dog is running.");
	setTimeout(function(){
		console.log("Dog is done.");
	}, 5000);
}).listen(1337);