/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_t_payment', {
		wb_t_pay_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		wb_t_pay_proc_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_t_bill_process',
				key: 'process_id'
			}
		},
		wb_t_pay_LYA: {
			type: "DOUBLE",
			allowNull: true
		},
		wb_t_pay_LMA: {
			type: "DOUBLE",
			allowNull: true
		},
		wb_t_pay_TMA: {
			type: "DOUBLE",
			allowNull: true
		},
		wb_t_pay_OP: {
			type: "DOUBLE",
			allowNull: true
		},
		wb_t_pay_LYCA: {
			type: "DOUBLE",
			allowNull: true
		},
		wb_t_pay_LMCA: {
			type: "DOUBLE",
			allowNull: true
		},
		wb_t_pay_TMCA: {
			type: "DOUBLE",
			allowNull: true
		},
		wb_t_pay_COP: {
			type: "DOUBLE",
			allowNull: true
		},
		wb_t_pay_receipt_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		wb_t_pay_receipt_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		wb_t_pay_month: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_t_pay_year: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_t_pay_cash: {
			type: "DOUBLE",
			allowNull: true
		},
		wb_t_pay_cheque: {
			type: "DOUBLE",
			allowNull: true
		},
		wb_t_pay_cheque_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		wb_t_pay_cheque_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		wb_t_pay_cash_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		wb_t_pay_cheque_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		wb_t_pay_complete_or_not: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		wb_t_pay_connection_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_connection',
				key: 'wb_m_connection_id'
			}
		},
		wb_t_pay_total: {
			type: "DOUBLE",
			allowNull: true
		},
		wb_t_receipt_id_payment: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'receipt',
				key: 'idReceipt'
			}
		}
	}, {
		tableName: 'wb_t_payment'
	});
};
