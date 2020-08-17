/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('payment', {
		idPayment: {
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
		application_no: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		year: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		month: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		payment_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		receipt_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		tax_amount: {
			type: "DOUBLE",
			allowNull: true
		},
		vat: {
			type: "DOUBLE",
			allowNull: true
		},
		nbt: {
			type: "DOUBLE",
			allowNull: true
		},
		spamp: {
			type: "DOUBLE",
			allowNull: true
		},
		totale_amount: {
			type: "DOUBLE",
			allowNull: true
		},
		CASH CHEACK: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		User_Log_idUser_Log: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'user_log',
				key: 'idUser_Log'
			}
		}
	}, {
		tableName: 'payment'
	});
};
