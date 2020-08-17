/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sl_arrears_type', {
		arrears_type_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		arrears_type: {
			type: DataTypes.STRING(20),
			allowNull: true
		}
	}, {
		tableName: 'sl_arrears_type'
	});
};
