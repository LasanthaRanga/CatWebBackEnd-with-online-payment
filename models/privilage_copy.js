/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('privilage_copy', {
		idPrivilage: {
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
		componant: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		id: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		Privilagecol: {
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
		tableName: 'privilage_copy'
	});
};
