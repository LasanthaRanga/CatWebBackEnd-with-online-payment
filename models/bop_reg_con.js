/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bop_reg_con', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		bopCommitteeid: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'bophascommettee',
				key: 'idBopHasCommettee'
			}
		},
		val: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		type: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'bop_reg_con'
	});
};
