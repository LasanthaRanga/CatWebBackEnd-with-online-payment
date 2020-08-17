/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_t_paid', {
		wb_t_paid_detail_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		wb_t_receipt_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'receipt',
				key: 'idReceipt'
			}
		},
		wb_t_receipt_no: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		wb_t_LYA: {
			type: "DOUBLE",
			allowNull: true
		},
		wb_t_LMA: {
			type: "DOUBLE",
			allowNull: true
		},
		wb_t_TMA: {
			type: "DOUBLE",
			allowNull: true
		},
		wb_t_OP: {
			type: "DOUBLE",
			allowNull: true
		},
		wb_t_VAT: {
			type: "DOUBLE",
			allowNull: true
		},
		wb_t_complete_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_t_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		wb_t_time: {
			type: DataTypes.TIME,
			allowNull: true
		},
		wb_t_user: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'user',
				key: 'idUser'
			}
		},
		wb_t_connection_id_paid: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_connection',
				key: 'wb_m_connection_id'
			}
		}
	}, {
		tableName: 'wb_t_paid'
	});
};
