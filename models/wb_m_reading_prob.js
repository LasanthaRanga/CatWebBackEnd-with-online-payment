/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_m_reading_prob', {
		wb_m_reading_prob_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		wb_m_reading_prob_con_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_connection',
				key: 'wb_m_connection_id'
			}
		},
		wb_m_reading_prob_status_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_reading_problems',
				key: 'wb_m_problems_id'
			}
		},
		wb_m_reading_prob_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		wb_m_reading_prob_invoice_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		wb_m_fix_or_not: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'wb_m_reading_prob'
	});
};
