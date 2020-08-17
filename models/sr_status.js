/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_status', {
		sr_status_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		sr_status: {
			type: DataTypes.STRING(20),
			allowNull: true
		}
	}, {
		tableName: 'sr_status'
	});
};
