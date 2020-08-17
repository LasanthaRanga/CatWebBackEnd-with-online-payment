/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('program_title', {
		idProgram_title: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		title_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		status_program_title: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		syn_program_title: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Program_idProgram: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'program',
				key: 'idProgram'
			}
		}
	}, {
		tableName: 'program_title'
	});
};
