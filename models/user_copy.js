/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_copy', {
		idUser: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		full_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		nic: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		mobile: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		reg_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		sq: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sqa: {
			type: DataTypes.STRING(255),
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
		tableName: 'user_copy'
	});
};
