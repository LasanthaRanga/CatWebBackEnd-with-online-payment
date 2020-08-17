/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_m_meter_reader', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nic: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		tel: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		status: {
			type: DataTypes.STRING(3),
			allowNull: false,
			defaultValue: 'ACT'
		}
	}, {
		tableName: 'wb_m_meter_reader'
	});
};
