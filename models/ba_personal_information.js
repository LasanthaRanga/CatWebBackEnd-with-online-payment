/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ba_personal_information', {
		BA_Personal_details_Id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		BA_Application_Number: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_Bop_Id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		BA_Uda_area_or_not: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_La_Id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		BA_Application_Date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		BA_Electoral_Distric_Id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		BA_Gn_Division_Id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		BA_Typeof_Applicant: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_Constrction_Type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_land_acres: {
			type: "DOUBLE",
			allowNull: true
		},
		BA_land_roods: {
			type: "DOUBLE",
			allowNull: true
		},
		BA_Surveyors_Name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_Surveyors_No: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_Surveyors_Date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		BA_lot_no: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_Land_current_description: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_Floor_count: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_Building_height: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_Vehicle_park_description: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_water_volume: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_Electricity_capacity: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_Number_of_emp: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_starting_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		BA_end_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		BA_Rda_area_or_not: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'ba_personal_information'
	});
};
