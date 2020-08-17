/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sabha_details', {
		sabha_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		sabha_name_english: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sabhaname_sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sabha_code: {
			type: DataTypes.STRING(10),
			allowNull: true
		}
	}, {
		tableName: 'sabha_details'
	});
};
