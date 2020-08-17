/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('paymentbyward', {
		idWard: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		receipt_print_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		receipt_day: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		pay: {
			type: "DOUBLE(19,2)",
			allowNull: true
		},
		Assessment_idAssessment: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'paymentbyward'
	});
};
