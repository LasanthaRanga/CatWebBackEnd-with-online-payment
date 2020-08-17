/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_m_main_road', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		road_name: {
			type: DataTypes.STRING(250),
			allowNull: false
		},
		date_created: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		date_modified: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		modified_by: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		status: {
			type: DataTypes.STRING(3),
			allowNull: false,
			defaultValue: 'ACT'
		}
	}, {
		tableName: 'wb_m_main_road'
	});
};
