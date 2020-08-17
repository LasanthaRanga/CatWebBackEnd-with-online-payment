/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ba_question_details', {
		question_detail_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		question_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		answer_list: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		control_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'ba_question_details'
	});
};
