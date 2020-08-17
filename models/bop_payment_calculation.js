/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bop_payment_calculation', {
		cal_payment_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		lots_of_land: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		land_start_size: {
			type: "DOUBLE",
			allowNull: true
		},
		land_end_size: {
			type: "DOUBLE",
			allowNull: true
		},
		price: {
			type: "DOUBLE",
			allowNull: true
		}
	}, {
		tableName: 'bop_payment_calculation'
	});
};
