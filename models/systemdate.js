/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('systemdate', {
		idSystemDate: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		systemDate: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		systemDate_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		change_user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'systemdate'
	});
};
