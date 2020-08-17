/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_year', {
		year: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'wb_year'
	});
};
