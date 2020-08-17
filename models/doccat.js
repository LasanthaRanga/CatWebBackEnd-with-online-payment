/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('doccat', {
		idDoccat: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Doccat_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'doccat'
	});
};
