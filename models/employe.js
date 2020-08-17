/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('employe', {
		idEmploye: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Grade_idGrade: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'grade',
				key: 'idGrade'
			}
		}
	}, {
		tableName: 'employe'
	});
};
