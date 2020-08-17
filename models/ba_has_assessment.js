/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ba_has_assessment', {
		BA_Assessment_has_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		BA_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		BA_assessment_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'ba_has_assessment'
	});
};
