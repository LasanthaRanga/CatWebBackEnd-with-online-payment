/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('job', {
		idJob: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		job_number: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		job_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		job_type_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		job_description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		job_instruction: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		job_dip_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		job_dedline: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		job_create_datetime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		job_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'job'
	});
};
