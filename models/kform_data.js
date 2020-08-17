/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('kform_data', {
		idkfom: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		key: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		valueSinhala: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		valueEnglish: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		valueTemil: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'kform_data'
	});
};
