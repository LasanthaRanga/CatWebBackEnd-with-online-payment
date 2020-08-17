/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_shop_votes_category', {
		sr_shop_vote_category_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sr_shop_vote_category_name: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		sr_shop_vote_payment: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_vote_arrears: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_vote_fine: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_vote_overpayment: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_vote_service_charge_1: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_vote_service_charge_2: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_vote_service_charge_3: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_vote_account_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_vote_vat: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_vote_stamp: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_vote_nbt: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_vote_vat_vote_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_vote_stamp_vote_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_vote_nbt_vote_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_cash_vote: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_cheque_vote: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_vote_LYA: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_vote_LYF: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'sr_shop_votes_category'
	});
};
