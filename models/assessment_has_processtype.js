/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('assessment_has_processtype', {
		idAssessment_has_Processtype: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Assessment_idAssessment: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'assessment',
				key: 'idAssessment'
			}
		},
		Processtype_idProcesstype: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'processtype',
				key: 'idProcesstype'
			}
		},
		Assessment_has_Processtype_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		Assessment_has_Processtype_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		Assessment_has_Processtype_coment: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		User_idUser: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'user',
				key: 'idUser'
			}
		}
	}, {
		tableName: 'assessment_has_processtype'
	});
};
