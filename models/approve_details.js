/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('approve_details', {
		idApprove_details: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		comment: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		pricing: {
			type: "DOUBLE",
			allowNull: true
		},
		status_approv_details: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		Others: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		date_approve_details: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Send_to_approve_idSend_to_approve: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'send_to_approve',
				key: 'idSend_to_approve'
			}
		}
	}, {
		tableName: 'approve_details'
	});
};
