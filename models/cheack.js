/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cheack', {
		idCheack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cheack_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		cheack_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		cheack_price: {
			type: "DOUBLE",
			allowNull: true
		},
		cheack_today: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		cheack_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		cheack_syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Cheackcol: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		Receipt_idReceipt: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'receipt',
				key: 'idReceipt'
			}
		}
	}, {
		tableName: 'cheack'
	});
};
