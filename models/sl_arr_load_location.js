/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sl_arr_load_location', {
		sl_arr_load_location_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		sl_arr_load_location_x: {
			type: "DOUBLE",
			allowNull: true
		},
		sl_arr_load_location_y: {
			type: "DOUBLE",
			allowNull: true
		},
		sl_arr_load_location_place_name: {
			type: DataTypes.STRING(20),
			allowNull: true
		}
	}, {
		tableName: 'sl_arr_load_location'
	});
};
