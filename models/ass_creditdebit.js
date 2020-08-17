/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ass_creditdebit', {
		idAss_CreditDebit: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Ass_CreditDebit_discription: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Ass_CreditDebit_cd: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		Ass_CreditDebit_amount: {
			type: "DOUBLE",
			allowNull: true
		},
		Ass_balance: {
			type: "DOUBLE",
			allowNull: true
		},
		Ass_CreditDebit_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		Assessment_idAssessment: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'assessment',
				key: 'idAssessment'
			}
		},
		Ass_CreditDebit_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'ass_creditdebit'
	});
};
