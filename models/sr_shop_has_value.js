/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_shop_has_value', {
		shop_has_value_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		value_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'sr_shop_values',
				key: 'sr_shop_value_id'
			}
		},
		value_shop_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'sr_shop',
				key: 'idsr_shop'
			}
		},
		value_status: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		}
	}, {
		tableName: 'sr_shop_has_value'
	});
};
