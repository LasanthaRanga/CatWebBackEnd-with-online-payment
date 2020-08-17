/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sub_nature', {
		idSub_Nature: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Trade_Nature_idTrade_Nature: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'trade_nature',
				key: 'idTrade_Nature'
			}
		},
		sub_nature_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		sub_nature: {
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
		}
	}, {
		tableName: 'sub_nature'
	});
};
