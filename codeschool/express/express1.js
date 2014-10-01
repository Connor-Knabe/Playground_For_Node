var express = require('express');
var http = require('http');
var app = express.createServer();
var url = require('url');
var request = require('request');



console.log("HI");
app.get('/tweets/:username', function(req, response){
	var username = req.params.username;
	options = {
		protocol: "https:",
		host: 'api.twitter.com',
		pathname: '/1.1/statuses/user_timeline.json',
		query: { screen_name: username, count: 10}
	}
	var twitterUrl = url.format(options);
	request(twitterUrl).pipe(response);
});
console.log("Ha");

app.listen(1337);
