/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('program_subtitle_copy', {
		idProgram_SubTitle: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Program_Title_idProgram_Title: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'program_title',
				key: 'idProgram_title'
			}
		},
		sub_title_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		sub_title_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'program_subtitle_copy'
	});
};
