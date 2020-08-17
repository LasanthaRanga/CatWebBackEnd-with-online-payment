/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('application', {
		idApplication: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Customer_idCustomer: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'customer',
				key: 'idCustomer'
			}
		},
		Trade_Type_idTrade_Type: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'trade_type',
				key: 'idTrade_Type'
			}
		},
		Trade_Nature_idTrade_Nature: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'trade_nature',
				key: 'idTrade_Nature'
			}
		},
		Sub_Nature_idSub_Nature: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'sub_nature',
				key: 'idSub_Nature'
			}
		},
		User_idUser: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0',
			references: {
				model: 'user',
				key: 'idUser'
			}
		},
		Assessment_idAssessment: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'assessment',
				key: 'idAssessment'
			}
		},
		application_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		application_date: {
			type: DataTypes.DATEONLY,
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
		allocation: {
			type: "DOUBLE",
			allowNull: true
		},
		trade_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		trade_address1: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		trade_address2: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		trade_address3: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		trade_nature: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		tax_amount: {
			type: "DOUBLE",
			allowNull: true
		},
		discription: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		statues: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		User_Log_idUser_Log: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'user_log',
				key: 'idUser_Log'
			}
		},
		approveTo_Paymant: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		cus_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		cus_nic: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sr_shop_idsr_shop: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Gnd_idGnd: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		tname_sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		cus_sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'application'
	});
};
