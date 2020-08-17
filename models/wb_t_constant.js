/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_t_constant', {
		constant_name: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		constant_value: {
			type: DataTypes.STRING(50),
			allowNull: true
		}
	}, {
		tableName: 'wb_t_constant'
	});
};
