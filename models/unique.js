/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('unique', {
		idUnique: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		customer_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		cus_nic: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		cus_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		appcat_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		app_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		mobile: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		conferm_code: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		rating: {
			type: DataTypes.INTEGER(255),
			allowNull: true
		},
		start_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		location: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		old_uinque_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'unique'
	});
};
