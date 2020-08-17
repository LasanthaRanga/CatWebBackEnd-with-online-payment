/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_t_load_cus_meter_read_status', {
		wb_t_invoice_com_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cus_meter_read_tbl_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		invoice_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		com_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		tot_payable_paid: {
			type: "DOUBLE",
			allowNull: true
		},
		Over_pay: {
			type: "DOUBLE",
			allowNull: true
		},
		receipt_id_cus_m_read_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'wb_t_load_cus_meter_read_status'
	});
};
