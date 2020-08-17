/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('action_has_do_on_action', {
		action_idaction: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		do_on_action_iddo_on_action: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'do_on_action',
				key: 'iddo_on_action'
			}
		}
	}, {
		tableName: 'action_has_do_on_action'
	});
};
