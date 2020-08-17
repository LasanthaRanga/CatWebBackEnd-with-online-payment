/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nonv_q_count2', {
		status_count: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0'
		},
		ass_PayHistry_year: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Assessment_idAssessment: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'nonv_q_count2'
	});
};
