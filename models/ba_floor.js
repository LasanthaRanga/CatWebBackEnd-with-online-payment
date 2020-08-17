/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ba_floor', {
		BA_Floor_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		BA_Floor_Level: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_Status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'ba_floor'
	});
};
