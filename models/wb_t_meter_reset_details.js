/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_t_meter_reset_details', {
		wb_t_meter_reset_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		wb_t_con_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_connection',
				key: 'wb_m_connection_id'
			}
		},
		wb_t_previous_reading: {
			type: "DOUBLE",
			allowNull: true
		},
		wb_t_curr_reading: {
			type: "DOUBLE",
			allowNull: true
		},
		wbt_comment_reset: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		wb_t_reset_user: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_t_reset_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		wb_t_reset_time: {
			type: DataTypes.TIME,
			allowNull: true
		}
	}, {
		tableName: 'wb_t_meter_reset_details'
	});
};
