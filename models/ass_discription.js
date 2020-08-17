/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ass_discription', {
		idass_discription: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ass_discription: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ass_discription_status: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'ass_discription'
	});
};
