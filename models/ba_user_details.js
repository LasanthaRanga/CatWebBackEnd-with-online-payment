/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ba_user_details', {
		BA_user_details_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		BA_customer_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		BA_Personal_details_Id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'ba_personal_information',
				key: 'BA_Personal_details_Id'
			}
		},
		BA_user_name_insinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_user_name_inenglish: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_user_address: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_user_Mobile: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_user_email: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'ba_user_details'
	});
};
