/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('program_title_copy', {
		idProgram_Title: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Program_idProgram: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'program',
				key: 'idProgram'
			}
		},
		title_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		title_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		int: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'program_title_copy'
	});
};
