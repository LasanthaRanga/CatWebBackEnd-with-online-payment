/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_has_department', {
		idUser_has_Department: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		User_idUser: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'user',
				key: 'idUser'
			}
		},
		Department_idDepartment: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'department',
				key: 'idDepartment'
			}
		},
		syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'user_has_department'
	});
};
