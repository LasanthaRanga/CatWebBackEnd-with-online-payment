/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_m_data_clear_tbl', {
		wb_m_data_clear_tbl_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		wb_m_water_cus_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_m_water_customer_no: {
			type: DataTypes.STRING(12),
			allowNull: true,
			references: {
				model: 'wb_m_connection',
				key: 'wb_m_customer_id'
			},
			unique: true
		},
		wb_m_water_con_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_m_nic_cus_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_m_nic_nicno: {
			type: DataTypes.STRING(12),
			allowNull: true
		},
		wb_m_ass_cus_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_m_ass_ass_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_m_ass_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		}
	}, {
		tableName: 'wb_m_data_clear_tbl'
	});
};
