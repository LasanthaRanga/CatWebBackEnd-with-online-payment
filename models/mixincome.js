/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mixincome', {
		idMixincome: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		mixincome_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		mixincome_fulltotal: {
			type: "DOUBLE",
			allowNull: true
		},
		mixincome_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		mixincome_year: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		customer_idCustomer: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		mixincome_userid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		mixincome_paytype: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'mixincome'
	});
};
