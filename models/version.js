/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('version', {
		idVersion: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		vnoint: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		vnostring: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		vdate: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		priority: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		downlink: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		downpage: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'version'
	});
};
