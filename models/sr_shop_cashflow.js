/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_shop_cashflow', {
		sr_shop_cash_flow_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sr_shop_cash_flow_cash: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_cash_flow_cheque: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_cash_flow_cheque_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		sr_shop_cash_flow_bank_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_cash_flow_receipt_no: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		sr_shop_cash_flow_cheque_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		sr_shop_cash_flow_create_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		sr_shop_cash_flow_time: {
			type: DataTypes.TIME,
			allowNull: true
		},
		sr_shop_cash_flow_complete_or_not: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		sr_shop_cash_flow_total_amount: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_cash_flow_shop_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'sr_shop',
				key: 'idsr_shop'
			}
		},
		sr_shop_cash_flow_paid_cash_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_cash_flow_paid_cheque_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'sr_shop_cashflow'
	});
};
