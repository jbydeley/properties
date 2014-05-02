var express = require('express');
var app = express();

app.get('/properties', function(req, res) {
	res.jsonp(200);
});

exports.app = app;