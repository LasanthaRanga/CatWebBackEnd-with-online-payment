/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('atachmant_env', {
		idAtachmant_env: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Atach_Type: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		name_atach: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		atach_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		atach_path: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Environment_idEnvironment: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'environment',
				key: 'idEnvironment'
			}
		}
	}, {
		tableName: 'atachmant_env'
	});
};
