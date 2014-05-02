var express = require('express');
var app = express();

var PropertiesModule = require('./app/properties')();

app.use('/properties', PropertiesModule.router);

exports.app = app;
exports.start = function() {
	app.listen(process.env.port || 3000);
}