var request = require('supertest');
var assert = require('chai').assert;

var app = require('../server.js').app;

describe('Properties', function() {
	it('should return a list of properties', function(done) {
		request(app)
			.get('/properties')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {
				if (err) throw err;

				assert.typeOf(res.body, 'array');
				done();
			});
	});

	it('should return a single property', function(done) {
		request(app)
			.get('/properties/2')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {
				if (err) throw err;

				assert.typeOf(res.body, 'object');
				done();
			});
	});

	it('should create a single property', function(done) {
		request(app)
			.post('/properties')
			.send({ name: 'Crazy deal!', rate: 450 })
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {
				if (err) throw err;

				assert.equal(res.body.name, 'Crazy deal!');
				done();
			});
	});

	it('should delete a single property', function(done) {
		request(app)
			.del('/properties/2')
			.expect(204, done);
	});
});