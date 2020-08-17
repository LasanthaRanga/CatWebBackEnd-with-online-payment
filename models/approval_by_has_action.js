/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('approval_by_has_action', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		approval_by_idApproval_By: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'approval_by',
				key: 'idApproval_By'
			}
		},
		action_idaction: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'action',
				key: 'idaction'
			}
		},
		perant_action: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		}
	}, {
		tableName: 'approval_by_has_action'
	});
};
