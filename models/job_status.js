/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('job_status', {
		idJob_status: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		jobstatus: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'job_status'
	});
};
