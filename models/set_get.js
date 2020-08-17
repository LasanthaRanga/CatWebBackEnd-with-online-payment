/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('set_get', {
		customer_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		cus_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		idCustomer: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		wb_m_connection_id: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		customer_id: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		reg_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		main_road: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sub_road: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		wb_m_street: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		id: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		supply_type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		wb_m_nature: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'set_get'
	});
};
