/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('alocationstatus1', {
		idass_allocation: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		Assessment_idAssessment: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ass_allocation: {
			type: "DOUBLE",
			allowNull: true
		},
		co: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'alocationstatus1'
	});
};
