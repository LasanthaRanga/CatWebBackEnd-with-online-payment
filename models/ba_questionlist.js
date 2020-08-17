/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ba_questionlist', {
		BA_Question_Id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		BA_Question: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_Status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		BA_Load_Status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'ba_questionlist'
	});
};
