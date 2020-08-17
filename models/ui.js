/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ui', {
		idui: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'ui'
	});
};
