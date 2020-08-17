/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sl_payment_vote', {
		sl_payment_vote_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sl_payment_app_catgry: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sl_payment_amount_vote: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sl_payment_VAT: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sl_payment_deposit: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sl_payment_stamp: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sl_payment_other1: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sl_payment_nbt: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sl_account_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sl_cash_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sl_cheque_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'sl_payment_vote'
	});
};
