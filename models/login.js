/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('login', {
		idLogin: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		User_idUser: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'user_copy',
				key: 'idUser'
			}
		},
		uname: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		pword: {
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
		tableName: 'login'
	});
};
