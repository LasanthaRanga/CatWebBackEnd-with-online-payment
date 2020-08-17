/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('customer_has_trade_license', {
		idCustomer_has_Trade_Licensecol: {
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
		Trade_License_idTrade_License: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'trade_license',
				key: 'idTrade_License'
			}
		},
		syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'customer_has_trade_license'
	});
};
