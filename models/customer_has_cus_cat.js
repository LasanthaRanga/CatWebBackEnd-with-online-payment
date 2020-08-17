/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('customer_has_cus_cat', {
		idCustomer_has_Cus_cat: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Customer_idCustomer: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'customer',
				key: 'idCustomer'
			}
		},
		Cus_cat_idCus_cat: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'cus_cat',
				key: 'idCus_cat'
			}
		},
		syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'customer_has_cus_cat'
	});
};
