/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_m_first_arrears', {
		wb_m_first_arrears_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		wb_m_first_arrears_conn_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_m_first_arrears_arreras: {
			type: "DOUBLE",
			allowNull: true
		},
		current_reading: {
			type: "DOUBLE",
			allowNull: true
		},
		previous_reading: {
			type: "DOUBLE",
			allowNull: true
		},
		order_number: {
			type: DataTypes.STRING(20),
			allowNull: true
		}
	}, {
		tableName: 'wb_m_first_arrears'
	});
};
