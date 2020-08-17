/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('subject', {
		idSubject: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		subject_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		subject_code: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		subject_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		department_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'subject'
	});
};
