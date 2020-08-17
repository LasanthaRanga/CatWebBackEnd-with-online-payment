/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('vehiclepass', {
		idVehiclePass: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Assessment_idAssessment: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Vehicle_No: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Issue_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		Customer_idCustomer: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'vehiclepass'
	});
};
