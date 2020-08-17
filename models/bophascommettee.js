/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bophascommettee', {
		idBopHasCommettee: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		bopId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'bop',
				key: 'idBOP'
			}
		},
		regulations: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		comment: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		condition: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'bophascommettee'
	});
};
