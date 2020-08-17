/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_t_bill_print', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cus_id: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		month: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		invoice_no: {
			type: DataTypes.STRING(25),
			allowNull: false
		},
		status: {
			type: DataTypes.STRING(1),
			allowNull: false,
			defaultValue: 'N'
		}
	}, {
		tableName: 'wb_t_bill_print'
	});
};
