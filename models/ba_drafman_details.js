/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ba_drafman_details', {
		BA_drafman_details_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		BA_Personal_details_Id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'ba_personal_information',
				key: 'BA_Personal_details_Id'
			}
		},
		BA_drafman_Name_sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_drafman_Name_english: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_drafman_Nic: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_drafman_Mobile: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_drafman_address_sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_drafman_Address_english: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'ba_drafman_details'
	});
};
