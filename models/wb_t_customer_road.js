/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_t_customer_road', {
		cus_id: {
			type: DataTypes.STRING(10),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'wb_m_customer',
				key: 'cus_id'
			}
		},
		reader_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		sub_road_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0',
			references: {
				model: 'wb_m_sub_road',
				key: 'id'
			}
		},
		order_no: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'wb_t_customer_road'
	});
};
