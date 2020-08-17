/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('report_value', {
		idkey: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		key: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		val: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		valenglish: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		valtamil: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'report_value'
	});
};
