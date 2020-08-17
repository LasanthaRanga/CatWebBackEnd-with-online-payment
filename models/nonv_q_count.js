/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nonv_q_count', {
		q1: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		q2: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		q3: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		q4: {
			type: DataTypes.DECIMAL,
			allowNull: true
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
		tableName: 'nonv_q_count'
	});
};
