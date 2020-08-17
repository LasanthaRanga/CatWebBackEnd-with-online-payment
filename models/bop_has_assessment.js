/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bop_has_assessment', {
		idBOP_has_Assessmentcol: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		BOP_idBOP: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'bop',
				key: 'idBOP'
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
		BOP_has_Assessment_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		size: {
			type: "DOUBLE",
			allowNull: true
		},
		price: {
			type: "DOUBLE",
			allowNull: true
		},
		comment: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		lotNo: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'bop_has_assessment'
	});
};
