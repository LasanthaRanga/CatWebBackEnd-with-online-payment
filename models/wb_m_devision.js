/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_m_devision', {
		devision_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		devison_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		sub_road_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_sub_road',
				key: 'id'
			}
		},
		division_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		division_assign_or_not: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		division_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		}
	}, {
		tableName: 'wb_m_devision'
	});
};
