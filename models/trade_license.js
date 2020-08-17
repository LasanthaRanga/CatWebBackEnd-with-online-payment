/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('trade_license', {
		idTrade_License: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Payment_idPayment: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'payment',
				key: 'idPayment'
			}
		},
		licen_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		trade_license_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Application_idApplication: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'application',
				key: 'idApplication'
			}
		}
	}, {
		tableName: 'trade_license'
	});
};
