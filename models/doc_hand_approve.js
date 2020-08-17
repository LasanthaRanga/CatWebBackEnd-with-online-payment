/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('doc_hand_approve', {
		approve_doc_hand_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		application_doc_hand_category_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		doc_hand_subject_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		doc_hand_send_user_category: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		doc_hand_send_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		doc_hand_send_time: {
			type: DataTypes.TIME,
			allowNull: true
		},
		doc_hand_recevied_user_category: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		doc_hand_complete_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		doc_hand_complete_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		doc_hand_complete_time: {
			type: DataTypes.TIME,
			allowNull: true
		},
		doc_hand_send_user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		doc_hand_recevied_user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		doc_hand_accept_or_reject: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		is_assign: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		engineer_user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		engineer_approve_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		engineer_approve_time: {
			type: DataTypes.TIME,
			allowNull: true
		}
	}, {
		tableName: 'doc_hand_approve'
	});
};
