/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('catdates', {
		idCatdate: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		type: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		dates: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		hours: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'catdates'
	});
};
