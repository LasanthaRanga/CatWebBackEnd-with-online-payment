/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_shop_proc', {
		sr_shop_proc_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
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
		sr_shop_last_year_arrears: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_last_year_arrears_bal: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_arrears: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_arrears_bal: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_fine: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_fine_bal: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_rental_tot: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_rental_tot_bal: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_over_pay: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_over_pay_bal: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_vat: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_nbt: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_stamp: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_sc1: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_sc1_balance: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_sc2: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_sc2_balance: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_sc3: {
			type: "DOUBLE",
			allowNull: false
		},
		sr_shop_sc3_balance: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_rent: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_proc_complete: {
			type: DataTypes.STRING(11),
			allowNull: true
		},
		sr_shop_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		sr_shop_time: {
			type: DataTypes.TIME,
			allowNull: true
		},
		sr_shop_user_id_proc: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_fine_process_do_or_not: {
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
		}
	}, {
		tableName: 'sr_shop_proc'
	});
};
