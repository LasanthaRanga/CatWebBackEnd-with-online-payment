/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tradelicensbyshop', {
		idApplication: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		application_no: {
			type: DataTypes.STRING(45),
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
		application_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		type_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		sr_building_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		sr_flow_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		sr_shop_no: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		tableName: 'tradelicensbyshop'
	});
};
