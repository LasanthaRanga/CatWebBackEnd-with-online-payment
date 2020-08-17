/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('building', {
		idBuilding: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Customer_idCustomer: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'customer',
				key: 'idCustomer'
			}
		},
		Assessment_idAssessment: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'building'
	});
};
