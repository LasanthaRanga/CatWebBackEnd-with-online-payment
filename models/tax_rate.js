/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tax_rate', {
		idTax_Rate: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		min: {
			type: "DOUBLE",
			allowNull: true
		},
		max: {
			type: "DOUBLE",
			allowNull: true
		},
		rate: {
			type: "DOUBLE",
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		taxType: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		taxTypeNo: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'tax_rate'
	});
};
