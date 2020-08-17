/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('phi_pending', {
		idApplication: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		application_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		application_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		trade_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		cus_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		cus_nic: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		assessment_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		street_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ward_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		approveTo_Paymant: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_flow_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		sr_building_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		sr_shop_no: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		idOtheritisCat: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		approval_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'phi_pending'
	});
};
