var controller = require('./controller');
var express = require('express');
var bodyParser = require('body-parser');

module.exports = function () {
	var router = express.Router();
	router.use(bodyParser());

	router
		.get('/', controller.get)
		.post('/', controller.create)
		.get('/:id', controller.getById)
		.delete('/:id', controller.delete);

		return {
			router: router,
			controller: controller
		};
};