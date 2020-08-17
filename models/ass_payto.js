/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ass_payto', {
		idass_payto: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ass_payto_Qno: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ass_payto_warrant: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_payto_arrears: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_payto_qvalue: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_payto_discount: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_payto_discount_rate: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_Payment_idass_Payment: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'ass_payment',
				key: 'idass_Payment'
			}
		},
		ass_payto_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'ass_payto'
	});
};
