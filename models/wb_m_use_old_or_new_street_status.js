/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_m_use_old_or_new_street_status', {
		wb_m_use_old_or_new_street_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		wb_m_use_old_or_new_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_m_use_old_or_new_comment: {
			type: DataTypes.STRING(20),
			allowNull: true
		}
	}, {
		tableName: 'wb_m_use_old_or_new_street_status'
	});
};
