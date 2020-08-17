/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('program', {
		idProgram: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name_program: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		Programcol: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		status_program: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		syn_program: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'program'
	});
};
