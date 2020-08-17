/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ass_subowner', {
		idass_subOwner: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ass_subOwner_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ass_subOwner_nic: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		ass_subOwner_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Assessment_idAssessment: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'assessment',
				key: 'idAssessment'
			}
		},
		title: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		ass_subOwner_namesinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'ass_subowner'
	});
};
