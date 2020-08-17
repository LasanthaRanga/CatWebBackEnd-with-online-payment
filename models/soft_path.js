/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('soft_path', {
		idSoft: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		appid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		path: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		comment: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'soft_path'
	});
};
