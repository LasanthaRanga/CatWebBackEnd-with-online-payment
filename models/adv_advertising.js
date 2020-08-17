/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('adv_advertising', {
		idAdv_Advertising: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		adv_start_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		adv_end_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		adv_board_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		adv_discription: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		adv_qr: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		adv_pt: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		adv_total: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_vat: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_nbt: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_stamp: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_diposit: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_ground_total: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_visiting_price: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_others: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_full_total: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_current_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		adv_paid_notpaid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		adv_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		adv_remove_comment: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		adv_syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Customer_idCustomer: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		adv_cheque: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_cash: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_cheque_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		adv_cheque_bank: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		adv_cheque_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		receipt_idReceipt: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		adv_diposit_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		adv_diposit_back: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_diposit_back_date: {
			type: "DOUBLE",
			allowNull: true
		},
		user_idUser: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		office_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'adv_advertising'
	});
};
