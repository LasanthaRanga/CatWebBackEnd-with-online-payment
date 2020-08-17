/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_shop_type', {
		idsr_shop_type: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sr_shop_type_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		sr_shop_type_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_type_months_count: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'sr_shop_type'
	});
};
