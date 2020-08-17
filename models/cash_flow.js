/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cash_flow', {
		idCash_Flow: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Vort_idVort: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'vort',
				key: 'idVort'
			}
		},
		Bank_Info_idBank_Info: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'bank_info',
				key: 'idBank_Info'
			}
		},
		Cheque_Bank_idCheque_Bank: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'cheque_bank',
				key: 'idCheque_Bank'
			}
		},
		recipt_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		cash: {
			type: "DOUBLE",
			allowNull: true
		},
		cheque: {
			type: "DOUBLE",
			allowNull: true
		},
		cheque_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		application_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		totale: {
			type: "DOUBLE",
			allowNull: true
		},
		year: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		mont: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		cf_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'cash_flow'
	});
};
