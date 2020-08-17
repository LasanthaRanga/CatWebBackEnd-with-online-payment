/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('interest', {
		idInterest: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		rate: {
			type: "DOUBLE",
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'interest'
	});
};
