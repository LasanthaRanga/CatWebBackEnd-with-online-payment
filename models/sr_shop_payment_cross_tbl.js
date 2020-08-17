/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_shop_payment_cross_tbl', {
		sr_shop_payment2_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sr_shop_payment2_vote_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_payment2_amount: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_payment2_account_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_payment2_receipt_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		sr_shop_payment2_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		sr_shop_payment2_time: {
			type: DataTypes.TIME,
			allowNull: true
		},
		sr_shop_payment2_user: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_payment2_shop_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'sr_shop',
				key: 'idsr_shop'
			}
		},
		sr_shop_payment2_complete_or_not: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		}
	}, {
		tableName: 'sr_shop_payment_cross_tbl'
	});
};
