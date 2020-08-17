/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fixcharge', {
		idFix: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		idAppCat: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		paytype: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		AppName: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		charge: {
			type: "DOUBLE",
			allowNull: true
		},
		hasVat: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		hasNbt: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		hasStamp: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		hasOther: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		vote_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'fixcharge'
	});
};
