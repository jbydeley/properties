
var express = require('express');
var bodyParser = require('body-parser');

module.exports = function (db) {
	var model = require('./model')(db);
	var controller = require('./controller');

	var router = express.Router();
	router.use(bodyParser());
	router.use(function(req, res, next) {
		req.db = model;
		next();
	});

	router
		.get('/', controller.get)
		.post('/', controller.create)
		.get('/:id', controller.getById)
		.put('/:id', controller.update)
		.delete('/:id', controller.delete);

		return {
			router: router,
			controller: controller
		};
};