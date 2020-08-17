/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('batochecklistanswer', {
		question_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		answer: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		subject_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'batochecklistanswer'
	});
};
