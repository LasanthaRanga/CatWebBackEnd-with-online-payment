/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ba_answer', {
		BA_Answer_Id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		BA_Answer: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'ba_answer'
	});
};
