/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_shop_payment', {
		sr_shop_paid_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sr_shop_proc_id1: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'sr_shop_proc',
				key: 'sr_shop_proc_id'
			}
		},
		sr_shop_shop_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'sr_shop',
				key: 'idsr_shop'
			}
		},
		sr_shop_proc_year: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_proc_month: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_paid_arrears_amount: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_paid_arrears_bal: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_paid_fine: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_paid_fine_bal: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_paid_rental_tot: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_paid_rental_tot_bal: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_paid_over_pay: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_paid_over_pay_bal: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_paid_vat: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_paid_nbt: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_paid_stamp: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_paid_sc1: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_sc1_balance: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_paid_sc2: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_sc2_balance: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_paid_sc3: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_sc3_balance: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_paid_rent: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_paid_proc_complete: {
			type: DataTypes.STRING(11),
			allowNull: true
		},
		sr_receipt_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		sr_paid_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		sr_create_payment_time: {
			type: DataTypes.TIME,
			allowNull: true
		},
		sr_shop_payment_complete_or_not: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_paid_user: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_receipt_order: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_last_year_fine: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_last_year_fine_bal: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_last_year_arrears: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_last_year_arrears_bal: {
			type: "DOUBLE",
			allowNull: true
		}
	}, {
		tableName: 'sr_shop_payment'
	});
};
