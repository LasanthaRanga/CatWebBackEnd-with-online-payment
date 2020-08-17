/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sheet1', {
		idReceipt: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		receipt_print_no: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		asss: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		order: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'sheet1'
	});
};
