/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('street_line_certifi_1', {
		slDate: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		cus_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		slServayOfficer: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		slPersonTitle: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		slServayDate: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		slPlanNo: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		sllotNo: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		ass_id: {
			type: DataTypes.STRING(11),
			allowNull: true
		},
		distance: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		StreetLine_idStreetLine: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		title_name: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		cus_address_l1_sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		cus_address_l2_sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		cus_address_l3_sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		cus_name_sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		},
		street_name_sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		idStreetLine: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		yes_no_status_name: {
			type: DataTypes.STRING(60),
			allowNull: true
		}
	}, {
		tableName: 'street_line_certifi_1'
	});
};
