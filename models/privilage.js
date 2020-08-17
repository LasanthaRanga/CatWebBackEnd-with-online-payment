/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('privilage', {
		idPrivilage: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		view: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		btn: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		arange: {
			type: "DOUBLE",
			allowNull: true
		},
		type: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'privilage'
	});
};
