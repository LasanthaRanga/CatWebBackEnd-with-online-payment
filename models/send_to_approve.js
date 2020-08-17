/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('send_to_approve', {
		idSend_to_approve: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Approval_By_idApproval_By: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'approval_by',
				key: 'idApproval_By'
			}
		},
		Send_to_user: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'user',
				key: 'idUser'
			}
		},
		status_approve: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		send_date_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Send_to_approvecol: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		Send_by_user: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0',
			references: {
				model: 'user',
				key: 'idUser'
			}
		},
		Application_id: {
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
		status_para: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1'
		},
		appID: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'applications',
				key: 'idApplications'
			}
		},
		done_dnt: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'send_to_approve'
	});
};
