/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('approval_cat', {
		idApproval_cat: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		approval_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		status_app_cat: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		syn_app_cat: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		}
	}, {
		tableName: 'approval_cat'
	});
};
