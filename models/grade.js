/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('grade', {
		idGrade: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		employe_type: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'grade'
	});
};
