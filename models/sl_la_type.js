/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sl_la_type', {
		la_type_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		la_type: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'sl_la_type'
	});
};
