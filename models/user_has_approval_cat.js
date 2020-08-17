/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_has_approval_cat', {
		idUser_has_Approval_cat: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		User_idUser: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'user',
				key: 'idUser'
			}
		},
		Approval_cat_idApproval_cat: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'approval_cat',
				key: 'idApproval_cat'
			}
		},
		dip_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		dip_syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'user_has_approval_cat'
	});
};
