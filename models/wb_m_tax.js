/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_m_tax', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		tax_name: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		percentage: {
			type: "DOUBLE",
			allowNull: true
		},
		status: {
			type: DataTypes.STRING(3),
			allowNull: true,
			defaultValue: 'ACT'
		},
		tax_amount_to_take_vat: {
			type: "DOUBLE",
			allowNull: true
		},
		vattake_amount_active_not: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'wb_m_tax'
	});
};
