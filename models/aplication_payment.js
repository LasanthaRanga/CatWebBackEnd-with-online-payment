/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('aplication_payment', {
		idAplication_Payment: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Application_idApplication: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'application',
				key: 'idApplication'
			}
		},
		Payment_idPayment: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'payment',
				key: 'idPayment'
			}
		},
		syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'aplication_payment'
	});
};
