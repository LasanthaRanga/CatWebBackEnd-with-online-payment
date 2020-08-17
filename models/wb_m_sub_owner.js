/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_m_sub_owner', {
		wb_m_sub_owner_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		wb_m_sub_owner_cus_tbl_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_m_sub_owner_reg_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		wb_m_sub_owner_resign_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		wb_m_sub_owner_active_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_m_sub_owner_cus_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_connection',
				key: 'wb_m_connection_id'
			}
		}
	}, {
		tableName: 'wb_m_sub_owner'
	});
};
