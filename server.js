var express = require('express');
var app = express();

var config = require('./config.json')[process.env.NODE_ENV || 'development'];

var Database = require('./database');
var db = new Database(config.db);

app.use(express.static('public'));
var PropertiesModule = require('./app/properties')(db);

app.use('/properties', PropertiesModule.router);

exports.app = app;
exports.start = function() {
	app.listen(process.env.port || 3000);
}