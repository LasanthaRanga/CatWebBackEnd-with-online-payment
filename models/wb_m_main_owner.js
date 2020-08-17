/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_m_main_owner', {
		wbm_main_owner_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		wbm_cus_table_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wbm_main_register_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		wbm_main_resign_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		wbm_main_active_in_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wbm_water_cus_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_connection',
				key: 'wb_m_connection_id'
			}
		}
	}, {
		tableName: 'wb_m_main_owner'
	});
};
