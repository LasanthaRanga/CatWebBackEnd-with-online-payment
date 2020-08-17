/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ba_payment_calculation', {
		BA_Pay_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		BA_Pay_Start_rate: {
			type: "DOUBLE",
			allowNull: true
		},
		BA_Pay_End_rate: {
			type: "DOUBLE",
			allowNull: true
		},
		BA_Pay_Price: {
			type: "DOUBLE",
			allowNull: true
		},
		BA_Pay_type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BA_Pay_Status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'ba_payment_calculation'
	});
};
