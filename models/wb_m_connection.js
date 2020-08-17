/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_m_connection', {
		wb_m_connection_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		wb_m_customer_id: {
			type: DataTypes.STRING(11),
			allowNull: true
		},
		wb_m_address: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		wb_m_assessment_table_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'assessment',
				key: 'idAssessment'
			}
		},
		wb_m_first_connection_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		wb_m_street: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_m_nature: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_nature',
				key: 'id'
			}
		},
		wb_m_connection_type: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_connection_type_detail',
				key: 'wb_m_con_type_id'
			}
		},
		wb_m_meter_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		wb_meter_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_reading_problems',
				key: 'wb_m_problems_id'
			}
		},
		wb_m_division_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_devision',
				key: 'devision_id'
			}
		},
		wb_m_application_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'application_catagory',
				key: 'idApplication_Catagory'
			}
		},
		wb_m_order_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_m_assign_customer_or_not: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		wb_m_assign_division_or_not: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_m_office_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'wb_m_connection'
	});
};
