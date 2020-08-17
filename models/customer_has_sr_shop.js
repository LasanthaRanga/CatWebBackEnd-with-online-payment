/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('customer_has_sr_shop', {
		idCustomer_has_sr_shop: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		customer_idCustomer: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'customer',
				key: 'idCustomer'
			}
		},
		sr_shop_idsr_shop: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'sr_shop',
				key: 'idsr_shop'
			}
		},
		customer_has_sr_shop_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'customer_has_sr_shop'
	});
};
