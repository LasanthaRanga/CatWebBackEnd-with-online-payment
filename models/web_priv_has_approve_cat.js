/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('web_priv_has_approve_cat', {
		idWeb_priv_has_approve_cat: {
			type: DataTypes.INTEGER(255),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		web_priv_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'web_privilages',
				key: 'id'
			}
		},
		approve_cat_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'approval_cat',
				key: 'idApproval_cat'
			}
		}
	}, {
		tableName: 'web_priv_has_approve_cat'
	});
};
