exports.get = function (req, res) {
	req.db.findAll()
		.error(function(err) {
			res.send(500, 'Error loading properties');
		})
		.success(function(properties) {
			res.jsonp(properties);
		});
};

exports.getById = function (req, res) {
	req.db.find(req.params.id)
		.error(function(err) {
			res.send(500, 'Error loading property');
		})
		.success(function(property) {
			if (!property) {
				res.jsonp(404, 'Property not found');
			} else {
				res.jsonp(property);
			}
		});
};

exports.create = function (req, res) {
	req.db.create(req.body)
		.error(function(err) {
			res.send(500, 'Error saving property');
		})
		.success(function(property) {
			res.jsonp(property);
		});
};

exports.update = function (req, res) {
	req.db.find(req.params.id)
		.error(function(err) {
			res.send(500, 'Error updating property');
		})
		.success(function(property) {
			if (!property) {
				res.send(404, 'Property not found');
			} else {
				property.updateAttributes(req.body)
					.success(function(property) {
						res.jsonp(property);
					});
			}
		});
};

exports.delete = function (req, res) {
	req.db.find(req.params.id)
		.success(function(property) {
			if (property) {
				property.destroy()
					.error(function(err) {
						res.send(500, 'Error deleting property');
					})
					.success(function() {
						res.send(204);
					});
			} else {
				res.send(404);
			}
		});
}