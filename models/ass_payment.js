/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ass_payment', {
		idass_Payment: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ass_Payment_Q_Number: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		ass_Payment_ThisYear: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ass_Payment_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		ass_Payment_LY_Arrears: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_Payment_LY_Warrant: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_Payment_fullTotal: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_Payment_idUser: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Assessment_idAssessment: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'assessment',
				key: 'idAssessment'
			}
		},
		Receipt_idReceipt: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'receipt',
				key: 'idReceipt'
			}
		},
		ass_nature_idass_nature: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'ass_nature',
				key: 'idass_nature'
			}
		},
		ass_allocation_idass_allocation: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'ass_allocation',
				key: 'idass_allocation'
			}
		},
		ass_Payment_goto_debit: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_Payment_Status: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		ass_cash: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_check: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_check_no: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ass_bank: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		pay_user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		cd_balance: {
			type: "DOUBLE",
			allowNull: true
		},
		office_idOffice: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'ass_payment'
	});
};
