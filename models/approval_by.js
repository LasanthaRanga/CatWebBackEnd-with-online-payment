/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('approval_by', {
		idApproval_By: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		priority: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Application_Catagory_idApplication_Catagory: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'application_catagory',
				key: 'idApplication_Catagory'
			}
		},
		Approval_cat_idApproval_cat: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0',
			references: {
				model: 'approval_cat',
				key: 'idApproval_cat'
			}
		},
		approve_type: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'approve_types',
				key: 'idaptype'
			}
		},
		yes: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		no: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'approval_by'
	});
};
