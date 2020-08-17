/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('job_assign', {
		idJob_assign: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		job_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		subject_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		date_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		status_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		step: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		step_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'job_assign'
	});
};
