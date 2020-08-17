/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fxkeyvalue', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		key: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		value: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		commnet: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'fxkeyvalue'
	});
};
