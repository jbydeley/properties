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
});