/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_m_connection_type_detail', {
		wb_m_con_type_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		wb_m_con_type: {
			type: DataTypes.STRING(20),
			allowNull: true
		}
	}, {
		tableName: 'wb_m_connection_type_detail'
	});
};
