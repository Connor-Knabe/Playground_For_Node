var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connect',function(client){
	console.log('Client connected...');


});
app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});
server.llisten(1337);