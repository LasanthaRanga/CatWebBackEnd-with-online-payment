/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bank', {
		idBank: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		bank_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		tableName: 'bank'
	});
};
