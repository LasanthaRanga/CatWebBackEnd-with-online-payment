/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_m_application_category', {
		wb_m_application_tblid: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		wb_m_application_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'wb_m_application_category'
	});
};
