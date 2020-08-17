/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('water_cus', {
		customer_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		water_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'water_cus'
	});
};
