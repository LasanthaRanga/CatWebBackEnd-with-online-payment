/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('approve_types', {
		idaptype: {
			type: DataTypes.INTEGER(255),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ap_type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		module: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		view: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'approve_types'
	});
};
