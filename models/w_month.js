/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('w_month', {
		id: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		month: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'w_month'
	});
};
