/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_shop_values', {
		sr_shop_value_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sr_shop_value_category_name: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		sr_shop_value_rental: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_value_fine: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_value_other_1: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_value_other_2: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_value_other_3: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_value_stamp: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		sr_shop_value_vat: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		sr_shop_value_nbt: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		sr_shop_value_vatid: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		sr_shop_value_nbtid: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		sr_shop_value_stampid: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		}
	}, {
		tableName: 'sr_shop_values'
	});
};
