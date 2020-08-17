/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_m_reading_problems', {
		wb_m_problems_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		wb_m_problem: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		wb_m_canorcant_read: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_meter_status',
				key: 'wb_m_meter_status_id'
			}
		},
		wb_m_problem_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_m_prob_code: {
			type: DataTypes.STRING(10),
			allowNull: true
		}
	}, {
		tableName: 'wb_m_reading_problems'
	});
};
