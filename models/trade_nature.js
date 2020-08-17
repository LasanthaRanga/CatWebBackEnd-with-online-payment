/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('trade_nature', {
		idTrade_Nature: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Trade_Type_idTrade_Type: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'trade_type',
				key: 'idTrade_Type'
			}
		},
		nature_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		nature: {
			type: DataTypes.STRING(255),
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
		sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'trade_nature'
	});
};
