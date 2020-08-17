/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('shoprental', {
		idShopRental: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		}
	}, {
		tableName: 'shoprental'
	});
};
