/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('do_on_action', {
		iddo_on_action: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		do_on_action: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'do_on_action'
	});
};
