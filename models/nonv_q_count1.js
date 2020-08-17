/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nonv_q_count1', {
		q1_1: {
			type: DataTypes.STRING(1),
			allowNull: false,
			defaultValue: ''
		},
		q2_1: {
			type: DataTypes.STRING(1),
			allowNull: false,
			defaultValue: ''
		},
		q3_1: {
			type: DataTypes.STRING(1),
			allowNull: false,
			defaultValue: ''
		},
		q4_1: {
			type: DataTypes.STRING(1),
			allowNull: false,
			defaultValue: ''
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
		tableName: 'nonv_q_count1'
	});
};
