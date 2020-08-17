/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('program_subtitle', {
		idprogram_subtitle: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sub_program_title: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		sub_program_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		sub_program_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sub_program_syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Program_title_idProgram_title: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'program_title',
				key: 'idProgram_title'
			}
		}
	}, {
		tableName: 'program_subtitle'
	});
};
