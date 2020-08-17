/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ba_checklist_text', {
		BA_Checklist_Id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		BA_App_Id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		BA_Question_Id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		BA_Answer: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_Status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'ba_checklist_text'
	});
};
