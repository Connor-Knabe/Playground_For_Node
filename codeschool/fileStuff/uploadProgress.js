var fs = require('fs');
var http = require('http');

http.createServer(function(request,response){

	var newFile = fs.createWriteStream("input.txt");
	var fileBytes = request.headers['content-length'];
	var uploadedBytes = 0;

	request.on('data', function(chunk){
		uploadedBytes += chunk.length;
		var progress = (uploadedBytes/fileBytes)*100;
		response.write("progress" + parseInt(progress, 10)+"%\n");
	});


	request.pipe(newFile);

	request.on('end', function(){
		response.end('uploaded!');
		console.log("file uploaded");
	});

}).listen(1337);
