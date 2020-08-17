/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('account_receipt_title', {
		idAccount_receipt_title: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ART_vote_and_bal: {
			type: DataTypes.STRING(45),
			allowNull: false,
			defaultValue: ''
		},
		ART_Pro_name_eng: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ART_Pro_code: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ART_Title_name_eng: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ATR_Title_code: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ART_Subtitle_name_eng: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ART_Subtitle_code: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ART_Type1_Id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ART_Type1_Name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		ART_Type2_Id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ART__Type2_Name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		ART_vote_or_bal: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ART_Order: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ART_V_B_Id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ART_Pro_name_sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ART_Title_name_sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ART_Subtitle_name_sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'account_receipt_title'
	});
};
