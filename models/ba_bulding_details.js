/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ba_bulding_details', {
		BA_Bulding_Details_Id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		BA_Application_Id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		BA_Floor_Id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		BA_Current: {
			type: "DOUBLE",
			allowNull: true
		},
		BA_Purpose: {
			type: "DOUBLE",
			allowNull: true
		},
		BA_Total: {
			type: "DOUBLE",
			allowNull: true
		},
		BA_floor_area_type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_price: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		BA_vat: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		BA_nbt: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'ba_bulding_details'
	});
};
