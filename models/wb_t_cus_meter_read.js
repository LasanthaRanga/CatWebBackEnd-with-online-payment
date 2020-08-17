/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_t_cus_meter_read', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cus_id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			references: {
				model: 'wb_m_connection',
				key: 'wb_m_connection_id'
			}
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		month: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		invoice_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		prev_reading: {
			type: DataTypes.INTEGER(20),
			allowNull: true,
			defaultValue: '-1'
		},
		curr_reading: {
			type: DataTypes.INTEGER(20),
			allowNull: true,
			defaultValue: '-1'
		},
		consumption: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		tax: {
			type: "DOUBLE",
			allowNull: true
		},
		water_charge: {
			type: "DOUBLE",
			allowNull: true
		},
		fixed_charge: {
			type: "DOUBLE",
			allowNull: true
		},
		total_payable: {
			type: "DOUBLE",
			allowNull: true
		},
		date_created: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		created_by: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		comments: {
			type: DataTypes.STRING(250),
			allowNull: true
		},
		due_amount: {
			type: "DOUBLE",
			allowNull: true
		},
		status: {
			type: DataTypes.STRING(3),
			allowNull: true,
			defaultValue: 'ACT'
		},
		reset_description: {
			type: DataTypes.STRING(250),
			allowNull: true
		},
		year: {
			type: DataTypes.INTEGER(5),
			allowNull: true
		},
		user_id: {
			type: DataTypes.STRING(11),
			allowNull: true
		},
		next_invoice: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		monthly_avg: {
			type: "DOUBLE",
			allowNull: true
		},
		arrears: {
			type: "DOUBLE",
			allowNull: true
		},
		next_month: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		next_year: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		payment_complete_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		payment_amount_sus_mr_invo: {
			type: "DOUBLE",
			allowNull: true
		},
		amount_paid_totpay: {
			type: "DOUBLE",
			allowNull: true
		},
		amount_paid_over_pay: {
			type: "DOUBLE",
			allowNull: true
		},
		amount_paid_over_payhave_havent: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'wb_t_cus_meter_read'
	});
};
