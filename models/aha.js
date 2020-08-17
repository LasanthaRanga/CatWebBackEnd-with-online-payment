/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('aha', {
		idAHA: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		appcat_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		bankinfo_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		office_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		aha_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'aha'
	});
};
