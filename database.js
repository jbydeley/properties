var Sequelize = require('sequelize');

module.exports = function Database(dbConfig) {
	var sequelize = new Sequelize(
		dbConfig.name,
		dbConfig.username,
		dbConfig.password,
		dbConfig.options);

	return {
		Sequelize: Sequelize,
		sequelize: sequelize
	}
}