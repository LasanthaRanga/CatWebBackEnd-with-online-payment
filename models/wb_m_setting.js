/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_m_setting', {
		wb_m_setting_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		wb_m_setting_meter_reader_category_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_m_setting_app_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'wb_m_setting'
	});
};
