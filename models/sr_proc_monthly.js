/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_proc_monthly', {
		shop_proc_monthly_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		shop_proc_monthly_year: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		shop_proc_monthly_month: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		shop_proc_monthly_Fine: {
			type: "DOUBLE",
			allowNull: true
		},
		shop_proc_monthly_rent: {
			type: "DOUBLE",
			allowNull: true
		},
		shop_proc_monthly_sc1: {
			type: "DOUBLE",
			allowNull: true
		},
		shop_proc_monthly_sc2: {
			type: "DOUBLE",
			allowNull: true
		},
		shop_proc_monthly_sc3: {
			type: "DOUBLE",
			allowNull: true
		},
		shop_proc_monthly_proc_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		shop_proc_monthly_shop_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'sr_shop',
				key: 'idsr_shop'
			}
		},
		shop_proc_monthly_vat: {
			type: "DOUBLE",
			allowNull: true
		},
		shop_proc_monthly_nbt: {
			type: "DOUBLE",
			allowNull: true
		},
		shop_proc_monthly_stamp: {
			type: "DOUBLE",
			allowNull: true
		}
	}, {
		tableName: 'sr_proc_monthly'
	});
};
