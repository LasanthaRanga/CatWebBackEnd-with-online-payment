/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sl_side', {
		side_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		side_name: {
			type: DataTypes.STRING(30),
			allowNull: true
		}
	}, {
		tableName: 'sl_side'
	});
};
