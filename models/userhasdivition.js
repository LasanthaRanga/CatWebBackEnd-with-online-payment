/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('userhasdivition', {
		idUserHasDivition: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Gnd_idGnd: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'gnd',
				key: 'idGnd'
			}
		},
		user_idUser: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'user',
				key: 'idUser'
			}
		},
		UserHasDivition_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'userhasdivition'
	});
};
