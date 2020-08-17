/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('otheritiscat', {
		idOtheritisCat: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		catname: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		disignation: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		statues: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'otheritiscat'
	});
};
