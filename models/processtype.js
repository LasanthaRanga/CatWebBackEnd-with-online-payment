/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('processtype', {
		idProcesstype: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Processtype_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'processtype'
	});
};
