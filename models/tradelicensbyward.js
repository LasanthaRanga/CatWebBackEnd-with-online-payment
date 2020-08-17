/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tradelicensbyward', {
		idApplication: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		ward_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		street_name: {
			type: DataTypes.STRING(255),
			allowNull: true
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
		assessment_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'tradelicensbyward'
	});
};
