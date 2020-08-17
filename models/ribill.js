/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ribill', {
		idRibill: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		billdate: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		billtotal: {
			type: "DOUBLE",
			allowNull: true
		},
		userid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ribill_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		bill_no: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		office_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		oder: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'ribill'
	});
};
