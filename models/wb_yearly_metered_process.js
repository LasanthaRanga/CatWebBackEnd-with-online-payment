/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_yearly_metered_process', {
		cus_id: {
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
			allowNull: true
		}
	}, {
		tableName: 'wb_yearly_metered_process'
	});
};
