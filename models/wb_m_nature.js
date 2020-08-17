/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_m_nature', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nature: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		charge: {
			type: "DOUBLE",
			allowNull: true
		},
		status: {
			type: DataTypes.STRING(3),
			allowNull: false,
			defaultValue: 'ACT'
		}
	}, {
		tableName: 'wb_m_nature'
	});
};
