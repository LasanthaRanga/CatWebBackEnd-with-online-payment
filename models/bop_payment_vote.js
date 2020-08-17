/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bop_payment_vote', {
		bop_payment_vote_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		bop_payment_amount_vote: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		bop_payment_VAT: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		bop_payment_deposit: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		bop_payment_stamp: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		bop_payment_other1: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		bop_payment_nbt: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		bop_account_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		bop_cash_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		bop_cheque_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'bop_payment_vote'
	});
};
