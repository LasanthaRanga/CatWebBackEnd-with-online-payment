/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('doc_hand_details', {
		doc_hand_detailsid: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		bop_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		User_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		user_cat_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		Time: {
			type: DataTypes.TIME,
			allowNull: true
		},
		Comment: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Isapprove: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		application_cat_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		to_comment: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'doc_hand_details'
	});
};
