/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_shop_has_customer', {
		sr_shop_has_customer_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sr_shop_has_customer_shop_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'sr_shop',
				key: 'idsr_shop'
			}
		},
		sr_shop_has_customer_customer_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'customer',
				key: 'idCustomer'
			}
		},
		sr_shop_has_customer_status_active: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_has_customer_start_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		sr_shop_has_customer_end_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		sr_shop_has_customer_tender_amount: {
			type: "DOUBLE",
			allowNull: true
		}
	}, {
		tableName: 'sr_shop_has_customer'
	});
};
