/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('electro_division', {
		el_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		el_div_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		el_div_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'electro_division'
	});
};
