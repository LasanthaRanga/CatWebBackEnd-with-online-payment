/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sl_arrears_panel_name', {
		sl_arrears_panel_name_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		sl_arrears_panel_name: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		sl_arrears_panel_arrears_type: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'sl_arrears_type',
				key: 'arrears_type_id'
			}
		}
	}, {
		tableName: 'sl_arrears_panel_name'
	});
};
