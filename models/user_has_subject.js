/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_has_subject', {
		idUser_has_subject: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		subject_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		uhs_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'user_has_subject'
	});
};
