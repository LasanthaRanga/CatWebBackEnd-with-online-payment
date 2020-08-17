/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('action', {
		idaction: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		action: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'action'
	});
};
