/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ribill_list', {
		idRibill_lsit: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		idRicit: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ricitstatus: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ricittotal: {
			type: "DOUBLE",
			allowNull: true
		},
		Ribill_idRibill: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'ribill',
				key: 'idRibill'
			}
		}
	}, {
		tableName: 'ribill_list'
	});
};
