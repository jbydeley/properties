var request = require('supertest');
var assert = require('chai').assert;

var app = require('../server.js').app;

describe('Properties', function() {

	var config = require('../config.json')['development'];
	var Database = require('../database');
	var db = new Database(config.db);

	var fixtures = require('./fixtures/properties');

	// Setup //
	before(function(done) {
		var PropertiesModel = require('../app/properties/model');
		var model = new PropertiesModel(db)
		model.sync({force: true})
			.success(function() {
				model.bulkCreate(fixtures)
					.success(function(fixtures) {
						done();
					});
			});
	});

	describe('selection', function () {
		it('should return a list of properties', function() {
			request(app)
				.get('/properties')
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res) {
					if (err) throw err;

					assert.equal(res.body.length, fixtures.length);
				});
		});

		it('should return a single property', function() {
			request(app)
				.get('/properties/2')
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res) {
					if (err) throw err;

					assert.typeOf(res.body, 'object');
				});
		});

		it('should return 404 when property not found', function() {
			request(app)
				.get('/properties/not-real')
				.expect(404);
		});
	});

	describe('creation', function() {
		var creationId;

		after(function() {
			request(app)
				.del('/properties/' + creationId)
				.expect(204);
		});

		it('should create a single property', function() {
			request(app)
				.post('/properties')
				.send({ name: 'Crazy deal!', rate: 450 })
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res) {
					if (err) throw err;

					creationId = res.body.id;

					assert.equal(res.body.name, 'Crazy deal!');
				});
		});
	});

	describe('deletion', function() {
		it('should delete a single property', function() {
			request(app)
				.del('/properties/2')
				.expect(204);
		});
	});

});