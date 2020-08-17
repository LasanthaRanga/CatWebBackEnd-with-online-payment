/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cheque_bank', {
		idCheque_Bank: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		BankName: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		tableName: 'cheque_bank'
	});
};
