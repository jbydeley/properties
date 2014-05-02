var stubbedData = [{
	name: 'Nice house by the beach!',
	rate: 800
},{
	name: 'A big boat ride!',
	rate: 90
},{
	name: 'A villa',
	rate: 10000
},{
	name: 'A shack!',
	rate: 10
}];

exports.get = function (req, res) {
	res.jsonp(stubbedData);
};

exports.getById = function (req, res) {
	// TODO: Add 404 if data not found. This is bad but should get me green.
	res.jsonp(stubbedData[req.params.id]);
};

exports.create = function (req, res) {
	res.jsonp(req.body);
};

exports.delete = function (req, res) {
	res.send(204);
}