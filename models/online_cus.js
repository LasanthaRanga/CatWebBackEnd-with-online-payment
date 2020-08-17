/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('online_cus', {
		idOnline: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		fullname: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		nic: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		mobile: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		pword: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		code: {
			type: DataTypes.STRING(255),
			allowNull: true
		},

	}, {
		tableName: 'online_cus'
	});
};
