/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('do_on_action_has_attributes', {
		id: {
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
		},
		attributes_idattributes: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'attributes',
				key: 'idattributes'
			}
		}
	}, {
		tableName: 'do_on_action_has_attributes'
	});
};
