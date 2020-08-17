/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_u_level', {
		l_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		level: {
			type: DataTypes.STRING(20),
			allowNull: false
		}
	}, {
		tableName: 'wb_u_level'
	});
};
