/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_flow', {
		idsr_flow: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sr_flow_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		sr_flow_number: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_flow_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_building_idsr_building: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'sr_building',
				key: 'idsr_building'
			}
		},
		sr_floor_code: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'sr_flow'
	});
};
