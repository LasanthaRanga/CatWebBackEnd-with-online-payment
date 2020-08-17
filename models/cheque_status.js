/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cheque_status', {
		cheque_status_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		cheque_st_name: {
			type: DataTypes.STRING(50),
			allowNull: true
		}
	}, {
		tableName: 'cheque_status'
	});
};
