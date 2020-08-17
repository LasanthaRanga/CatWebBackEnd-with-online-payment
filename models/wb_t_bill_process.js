/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_t_bill_process', {
		process_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		proc_connection_tbl_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_connection',
				key: 'wb_m_connection_id'
			}
		},
		proc_month: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		proc_invoice_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		proc_next_invoice: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		proc_last_year_arrears: {
			type: "DOUBLE",
			allowNull: true
		},
		proc_last_year_current_arrears: {
			type: "DOUBLE",
			allowNull: true
		},
		proc_last_month_arrears: {
			type: "DOUBLE",
			allowNull: true
		},
		proc_last_month_current_arrears: {
			type: "DOUBLE",
			allowNull: true
		},
		proc_this_month_amount: {
			type: "DOUBLE",
			allowNull: true
		},
		proc_this_month_current_balance: {
			type: "DOUBLE",
			allowNull: true
		},
		proc_overpayment: {
			type: "DOUBLE",
			allowNull: true
		},
		proc_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_proc_status',
				key: 'wb_m_proc_status_id'
			}
		},
		proc_year: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		proc_user_id: {
			type: DataTypes.STRING(11),
			allowNull: true
		},
		proc_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		proc_meter_reader: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_division_has_meter_reader',
				key: 'division_has_meter_reader_meter_reader_id'
			}
		},
		proc_nature_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_nature',
				key: 'id'
			}
		},
		proc_sub_road_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'street',
				key: 'idStreet'
			}
		},
		proc_division_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_devision',
				key: 'devision_id'
			}
		}
	}, {
		tableName: 'wb_t_bill_process'
	});
};
