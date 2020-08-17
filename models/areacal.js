/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('areacal', {
		idAreacal: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		min: {
			type: "DOUBLE",
			allowNull: true
		},
		max: {
			type: "DOUBLE",
			allowNull: true
		},
		price: {
			type: "DOUBLE",
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'areacal'
	});
};
