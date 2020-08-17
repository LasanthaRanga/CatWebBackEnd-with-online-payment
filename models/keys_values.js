/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('keys_values', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		keyname: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		val: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'keys_values'
	});
};
