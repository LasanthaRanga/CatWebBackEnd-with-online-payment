/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_t_charge_scheme', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nature_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'wb_m_nature',
				key: 'id'
			}
		},
		range_start: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		range_end: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		unit_price: {
			type: "DOUBLE",
			allowNull: true
		},
		fixed_charge: {
			type: "DOUBLE",
			allowNull: true
		},
		unlimit_flag: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		}
	}, {
		tableName: 'wb_t_charge_scheme'
	});
};
