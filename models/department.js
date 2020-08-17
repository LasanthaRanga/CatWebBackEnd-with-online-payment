/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('department', {
		idDepartment: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		department: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		description: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		statues: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'department'
	});
};
