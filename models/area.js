/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('area', {
		idArea: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Area_price: {
			type: "DOUBLE",
			allowNull: true
		},
		Area_perchers: {
			type: "DOUBLE",
			allowNull: true
		},
		BOP_idBOP: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'bop',
				key: 'idBOP'
			}
		}
	}, {
		tableName: 'area'
	});
};
