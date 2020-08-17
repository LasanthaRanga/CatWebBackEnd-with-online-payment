/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('employe_has_application_catagory', {
		idEmploye_has_Application_Catagory: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Employe_idEmploye: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'employe',
				key: 'idEmploye'
			}
		},
		Application_Catagory_idApplication_Catagory: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'application_catagory',
				key: 'idApplication_Catagory'
			}
		}
	}, {
		tableName: 'employe_has_application_catagory'
	});
};
