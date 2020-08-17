/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cheque_process', {
		cheque_process_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cheque_process_subject_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		cheque_process_application_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		cheque_process_amount: {
			type: "DOUBLE",
			allowNull: true
		},
		cheque_process_cheque_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		cheque_process_cheque_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		cheque_process_cheque_get_time: {
			type: DataTypes.TIME,
			allowNull: true
		},
		cheque_process_realised_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		cheque_process_realised_time: {
			type: DataTypes.TIME,
			allowNull: true
		},
		cheque_process_realised_user: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		cheque_process_realised_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		cheque_process_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		cheque_process_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		cheque_process_user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		cheque_process_bank_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		cheque_process_account_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		cheque_process_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		cheque_process_order_no: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'cheque_process'
	});
};
