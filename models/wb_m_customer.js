/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_m_customer', {
		cus_id: {
			type: DataTypes.STRING(10),
			allowNull: false,
			primaryKey: true
		},
		nic: {
			type: DataTypes.STRING(10),
			allowNull: true,
			defaultValue: '0'
		},
		name: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		address: {
			type: DataTypes.STRING(250),
			allowNull: false
		},
		owner_name: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		tax_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		reg_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		sub_road: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'wb_m_sub_road',
				key: 'id'
			}
		},
		nature: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'wb_m_nature',
				key: 'id'
			}
		},
		security_deposit: {
			type: "DOUBLE",
			allowNull: true,
			defaultValue: '0'
		},
		estimate_amount: {
			type: "DOUBLE",
			allowNull: true,
			defaultValue: '0'
		},
		status: {
			type: DataTypes.STRING(3),
			allowNull: false,
			defaultValue: 'ACT'
		},
		meter_no: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		has_meter: {
			type: DataTypes.STRING(3),
			allowNull: true
		},
		monthly_amount: {
			type: "DOUBLE",
			allowNull: true
		},
		devisions_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_devision',
				key: 'devision_id'
			}
		}
	}, {
		tableName: 'wb_m_customer'
	});
};
