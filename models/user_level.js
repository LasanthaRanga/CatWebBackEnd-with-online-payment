/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_level', {
		user_level_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_level: {
			type: DataTypes.STRING(20),
			allowNull: true
		}
	}, {
		tableName: 'user_level'
	});
};
