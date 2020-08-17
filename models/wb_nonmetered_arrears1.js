/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_nonmetered_arrears1', {
		customer_id: {
			type: DataTypes.STRING(10),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'wb_m_customer',
				key: 'cus_id'
			}
		},
		arrears: {
			type: "DOUBLE",
			allowNull: false
		},
		status: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		}
	}, {
		tableName: 'wb_nonmetered_arrears1'
	});
};
