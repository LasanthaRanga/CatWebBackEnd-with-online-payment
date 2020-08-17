/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('application_catagory', {
		idApplication_Catagory: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		application_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		Application_Catagory_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Application_Catagory_syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'application_catagory'
	});
};
