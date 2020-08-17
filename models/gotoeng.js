/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('gotoeng', {
		idGotoeng: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		NatureCat: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'gotoeng'
	});
};
