/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ass_nature', {
		idass_nature: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ass_nature_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		ass_nature_year_rate: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_nature_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ass_nature_warrant_rate: {
			type: "DOUBLE",
			allowNull: true
		}
	}, {
		tableName: 'ass_nature'
	});
};
