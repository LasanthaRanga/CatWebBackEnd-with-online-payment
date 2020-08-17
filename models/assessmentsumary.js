/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('assessmentsumary', {
		ward_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		ass_nature_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		Sum(ass_allocation.ass_allocation): {
			type: "DOUBLE",
			allowNull: true
		},
		Count(assessment.idAssessment): {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0'
		},
		Name_exp_5: {
			type: "DOUBLE(19,2)",
			allowNull: true
		}
	}, {
		tableName: 'assessmentsumary'
	});
};
