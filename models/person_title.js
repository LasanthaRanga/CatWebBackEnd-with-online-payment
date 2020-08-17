/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('person_title', {
		title_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title_name: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		title_name_eng: {
			type: DataTypes.STRING(20),
			allowNull: true
		}
	}, {
		tableName: 'person_title'
	});
};
