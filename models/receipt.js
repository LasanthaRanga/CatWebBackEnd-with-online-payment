/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('receipt', {
		idReceipt: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Application_Catagory_idApplication_Catagory: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'application_catagory',
				key: 'idApplication_Catagory'
			}
		},
		recept_applicationId: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		receipt_print_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		cheack: {
			type: "DOUBLE",
			allowNull: true
		},
		cesh: {
			type: "DOUBLE",
			allowNull: true
		},
		receipt_total: {
			type: "DOUBLE",
			allowNull: true
		},
		receipt_day: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		receipt_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		receipt_syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		chque_no: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		chque_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		chque_bank: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		oder: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		office_idOffice: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		receipt_account_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		receipt_user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'user',
				key: 'idUser'
			}
		},
		ribno: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		receipt_time: {
			type: DataTypes.TIME,
			allowNull: true
		}
	}, {
		tableName: 'receipt'
	});
};
