/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_fine_process_view', {
		sr_shop_proc_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		sr_shop_rent: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_value_fine: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_over_pay_bal: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_before_add_amount: {
			type: "DOUBLE",
			allowNull: true
		},
		balance_amount: {
			type: "DOUBLE",
			allowNull: true
		},
		value_status: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		sr_shop_proc_year: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_proc_month: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_shop_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		fine_charge: {
			type: "DOUBLE(19,2)",
			allowNull: true
		}
	}, {
		tableName: 'sr_fine_process_view'
	});
};
