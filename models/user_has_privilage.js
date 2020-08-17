/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_has_privilage', {
		idUser_has_Privilage: {
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
		Privilage_idPrivilage: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'privilage',
				key: 'idPrivilage'
			}
		},
		User_has_Privilage_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		User_has_Privilage_syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'user_has_privilage'
	});
};
