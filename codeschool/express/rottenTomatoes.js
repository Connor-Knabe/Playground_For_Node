var express = require('express');
var http = require('http');
var app = express.createServer();
var url = require('url');
var request = require('request');



console.log("HI");
app.get('/apikey/:api/q/:query', function(req, response){
	var api = req.params.api;
	var query = req.params.query;

	options = {
		protocol: "http:",
		host: 'api.rottentomatoes.com',
		pathname: '/api/public/v1.0/movies.json',
		query: { apikey: api, q:query}
	}
	var rottenUrl = url.format(options);
	console.log(rottenUrl);
	request(rottenUrl).pipe(response);
});
console.log("Ha");

app.listen(1337);
