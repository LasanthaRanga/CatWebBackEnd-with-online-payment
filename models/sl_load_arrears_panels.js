/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sl_load_arrears_panels', {
		sl_load_panels_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sl_load_panels_name: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'sl_arrears_panel_name',
				key: 'sl_arrears_panel_name_id'
			}
		},
		sl_load_panels_arrears_type: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'sl_arrears_type',
				key: 'arrears_type_id'
			}
		},
		sl_load_panels_view_order: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sl_load_panels_location_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'sl_arr_load_location',
				key: 'sl_arr_load_location_id'
			}
		},
		sl_load_panels_app_cat_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'sl_load_arrears_panels'
	});
};
