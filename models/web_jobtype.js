/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('web_jobtype', {
		idWeb_jobtype: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		jobtype_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		jobtype_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'web_jobtype'
	});
};
