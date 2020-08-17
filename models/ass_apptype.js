/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ass_apptype', {
		idAss_apptype: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		type_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'ass_apptype'
	});
};
