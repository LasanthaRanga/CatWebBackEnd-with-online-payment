/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_m_sub_road', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sub_road: {
			type: DataTypes.STRING(250),
			allowNull: true
		},
		main_road_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'wb_m_main_road',
				key: 'id'
			}
		}
	}, {
		tableName: 'wb_m_sub_road'
	});
};
