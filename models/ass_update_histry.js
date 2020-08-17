/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ass_update_histry', {
		idAss_Update: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		idAssessment: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		au_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		au_old_allocation: {
			type: "DOUBLE",
			allowNull: true
		},
		au_new_allocation: {
			type: "DOUBLE",
			allowNull: true
		},
		au_old_nature: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		au_new_nature: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		au_comment: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		au_cd: {
			type: "DOUBLE",
			allowNull: true
		},
		au_idUseer: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'ass_update_histry'
	});
};
