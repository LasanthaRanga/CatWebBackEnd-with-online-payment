/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('building_has_assessment', {
		idBuilding_has_assessment: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Building_idBuilding: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'building',
				key: 'idBuilding'
			}
		},
		Assessment_idAssessment: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'assessment',
				key: 'idAssessment'
			}
		},
		Building_has_assessment_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'building_has_assessment'
	});
};
