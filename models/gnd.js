/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('gnd', {
		idGnd: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		gnd_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		gnd_code: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ei_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'gnd'
	});
};
