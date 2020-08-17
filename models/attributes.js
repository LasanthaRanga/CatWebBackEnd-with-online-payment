/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('attributes', {
		idattributes: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		attribute: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'attributes'
	});
};
