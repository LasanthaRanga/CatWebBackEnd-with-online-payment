/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_t_connection_has_vote', {
		wb_t_con_has_cat_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		wb_t_con_has_conn_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_connection',
				key: 'wb_m_connection_id'
			}
		},
		wb_t_con_has_vote: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_t_vote_category',
				key: 'wb_t_vote_id'
			}
		},
		wb_t_con_has_vote_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'wb_t_connection_has_vote'
	});
};
