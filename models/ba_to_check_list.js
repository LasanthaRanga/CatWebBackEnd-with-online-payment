/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ba_to_check_list', {
		question_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		question: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'ba_to_check_list'
	});
};
