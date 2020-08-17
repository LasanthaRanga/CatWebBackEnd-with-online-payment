/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_t_cus_invoice', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cus_id: {
			type: DataTypes.STRING(10),
			allowNull: false,
			references: {
				model: 'wb_m_customer',
				key: 'cus_id'
			}
		},
		invoice_no: {
			type: DataTypes.STRING(20),
			allowNull: false,
			unique: true
		},
		invoice_date: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		month: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		consumption: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		water_charge: {
			type: "DOUBLE",
			allowNull: true
		},
		tax: {
			type: "DOUBLE",
			allowNull: true
		},
		fix_charge: {
			type: "DOUBLE",
			allowNull: true
		},
		total_payable: {
			type: "DOUBLE",
			allowNull: true
		},
		payment: {
			type: "DOUBLE",
			allowNull: true
		},
		date_created: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		creted_by: {
			type: DataTypes.STRING(15),
			allowNull: false
		},
		status: {
			type: DataTypes.STRING(3),
			allowNull: false,
			defaultValue: 'ACT'
		},
		pay_method: {
			type: DataTypes.STRING(6),
			allowNull: false,
			defaultValue: 'CASH'
		},
		cheque_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		arrears_today: {
			type: "DOUBLE",
			allowNull: true
		},
		year: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		create_year: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'wb_t_cus_invoice'
	});
};
