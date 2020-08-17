/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tradelicens', {
		idTradeLicens: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		}
	}, {
		tableName: 'tradelicens'
	});
};
