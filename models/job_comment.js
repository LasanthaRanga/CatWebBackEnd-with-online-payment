/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('job_comment', {
		idJobcom: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		comment: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		assign_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		coment_time: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'job_comment'
	});
};
