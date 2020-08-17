/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ass_newold', {
		idAss_newold: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		oldid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		newid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		appid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		newold_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'ass_newold'
	});
};
