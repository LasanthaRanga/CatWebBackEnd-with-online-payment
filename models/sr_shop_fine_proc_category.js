/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_shop_fine_proc_category', {
		sr_shop_fine_proc_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		sr_shop_fine_proc_category_name: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		sr_shop_fine_proc_day: {
			type: DataTypes.STRING(3),
			allowNull: true
		}
	}, {
		tableName: 'sr_shop_fine_proc_category'
	});
};
