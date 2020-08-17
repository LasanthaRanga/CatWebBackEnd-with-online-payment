/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('web_privilages', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		routerLink: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		caption: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		image: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(255),
			allowNull: true
		}
	}, {
		tableName: 'web_privilages'
	});
};
