/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sl_yes_no_details2', {
		yes_no_status_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		yes_no_status_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'sl_yes_no_details2'
	});
};
