/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_shop_fine_prc_detail', {
		sr_shop_fine_prc_detail_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sr_shop_fine_prc_detail_rent_amount: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_fine_prc_detail_fine: {
			type: "DOUBLE",
			allowNull: true
		},
		sr_shop_fine_prc_detail_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		sr_shop_fine_prc_detail_time: {
			type: DataTypes.TIME,
			allowNull: true
		},
		sr_shop_fine_prc_detail_year: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		sr_shop_fine_prc_detail_month: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		sr_shop_fine_prc_detail_userid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_fine_prc_detail_process_tbl_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'sr_shop_proc',
				key: 'sr_shop_proc_id'
			}
		},
		sr_shop_fine_prc_detail_shop_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'sr_shop',
				key: 'idsr_shop'
			}
		}
	}, {
		tableName: 'sr_shop_fine_prc_detail'
	});
};
