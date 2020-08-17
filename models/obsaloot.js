/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('obsaloot', {
		idobsaloot: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		obsaloot_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		obsaloot_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		obsaloot_details: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		obsaloot_d_or_a: {
			type: DataTypes.STRING(1),
			allowNull: true
		},
		Assessment_idAssessment: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'assessment',
				key: 'idAssessment'
			}
		}
	}, {
		tableName: 'obsaloot'
	});
};
