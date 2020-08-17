/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sub', {
		idass_subOwner: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
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
			allowNull: false
		}
	}, {
		tableName: 'sub'
	});
};
