/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_signatuer', {
		user_sig_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		img_signature: {
			type: "LONGBLOB",
			allowNull: true
		},
		img_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		imgurl_web: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'user_signatuer'
	});
};
