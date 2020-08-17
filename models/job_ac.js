/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('job_ac', {
		idJob_ac: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		job_comment: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		job_attach: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		assign_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'job_ac'
	});
};
