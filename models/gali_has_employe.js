/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('gali_has_employe', {
		idGali_has_Employe: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Gali_idGali: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'gali',
				key: 'idGali'
			}
		},
		Employe_idEmploye: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'employe',
				key: 'idEmploye'
			}
		}
	}, {
		tableName: 'gali_has_employe'
	});
};
