/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_shop_before_add_amount', {
		sr_shop_before_add_amount_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		sr_shop_before_add_amount: {
			type: "DOUBLE",
			allowNull: true
		}
	}, {
		tableName: 'sr_shop_before_add_amount'
	});
};
