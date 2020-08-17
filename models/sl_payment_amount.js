/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sl_payment_amount', {
		sl_payment_amount_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		sl_payment_app_catgry: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sl_payment_amount: {
			type: "DOUBLE",
			allowNull: true
		},
		sl_payment_amount_VAT: {
			type: "DOUBLE",
			allowNull: true
		},
		sl_payment_amount_stamp: {
			type: "DOUBLE",
			allowNull: true
		},
		sl_payment_amount_nbt: {
			type: "DOUBLE",
			allowNull: true
		},
		sl_payment_amount_other: {
			type: "DOUBLE",
			allowNull: true
		},
		sl_payment_amount_other1: {
			type: "DOUBLE",
			allowNull: true
		},
		sl_payment_amount_other2: {
			type: "DOUBLE",
			allowNull: true
		},
		sl_payment_amount_deposit: {
			type: "DOUBLE",
			allowNull: true
		}
	}, {
		tableName: 'sl_payment_amount'
	});
};
