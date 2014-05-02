var request = require('supertest');
var app = require('../server.js').app;

describe('Properties', function() {
	it('should return a list of properties', function(done) {
		request(app)
			.get('/properties')
			.expect('Content-Type', /json/)
			.expect(200, done)
	});
});