/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('trade_type', {
		idTrade_Type: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Vort_idVort: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'vort',
				key: 'idVort'
			}
		},
		type_name: {
			type: DataTypes.STRING(45),
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
		type_sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'trade_type'
	});
};
