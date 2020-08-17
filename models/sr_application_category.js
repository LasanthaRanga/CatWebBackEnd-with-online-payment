/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_application_category', {
		sr_app_category_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		sr_app_category: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'sr_application_category'
	});
};
