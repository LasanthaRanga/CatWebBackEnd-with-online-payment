/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_has_dipartment', {
		idUser_has_department: {
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
		Dipartment_idDipartment: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'dipartment',
				key: 'idDipartment'
			}
		}
	}, {
		tableName: 'user_has_dipartment'
	});
};
