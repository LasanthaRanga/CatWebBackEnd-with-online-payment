/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('environment', {
		idEnvironment: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		app_no_env: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		Customer_idCustomer: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'customer',
				key: 'idCustomer'
			}
		},
		address_env: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		date_env: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		Contact_env: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		discription: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		status_env: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		syn_env: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'environment'
	});
};
