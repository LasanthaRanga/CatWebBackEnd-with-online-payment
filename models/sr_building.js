/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_building', {
		idsr_building: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sr_building_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		sr_building_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_building_code: {
			type: DataTypes.STRING(11),
			allowNull: true
		}
	}, {
		tableName: 'sr_building'
	});
};
