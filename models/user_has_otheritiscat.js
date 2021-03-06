/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_has_otheritiscat', {
		idUser_has_OtheritisCat: {
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
		OtheritisCat_idOtheritisCat: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'otheritiscat',
				key: 'idOtheritisCat'
			}
		},
		syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'user_has_otheritiscat'
	});
};
