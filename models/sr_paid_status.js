/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_paid_status', {
		sr_paid_status_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sr_paid_status_name: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		sr_paid_status_no: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'sr_paid_status'
	});
};
