module.exports = function(db) {
	var Sequelize = db.Sequelize;
	var sequelize = db.sequelize;

	var properties = sequelize.define('properties', {
		name: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		rate: {
			type: Sequelize.INTEGER,
			allowNull: false,
			validate: {
				min: 0
			}
		},
		description: {
			type: Sequelize.TEXT,
			allowNull: true
		}
	});

	properties.sync();

	return properties;
}