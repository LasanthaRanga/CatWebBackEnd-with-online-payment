/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('receipt_code_create', {
		receipt_code_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		receipt_code: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		application_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'application_catagory',
				key: 'idApplication_Catagory'
			}
		},
		cheque_code: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		receipt_code_office_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'office',
				key: 'idOffice'
			}
		},
		account_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'receipt_code_create'
	});
};
