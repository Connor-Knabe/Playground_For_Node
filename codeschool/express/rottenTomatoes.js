var express = require('express');
var http = require('http');
var app = express.createServer();
var url = require('url');
var request = require('request');



console.log("HI");
app.get('?apikey=:api', function(req, response){
	var api = req.params.api;
	options = {
		protocol: "https:",
		host: 'http://api.rottentomatoes.com',
		pathname: '/api/public/v1.0/movies.json',
		query: { api_key: api, count: 10}
	}
	var rottenUrl = url.format(options);
	request(rottenUrl).pipe(response);
});
console.log("Ha");

app.listen(1337);
