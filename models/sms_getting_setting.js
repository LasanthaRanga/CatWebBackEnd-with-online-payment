/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sms_getting_setting', {
		sms_setting_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sms_gatway_id: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		sms_gatway_pwd: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		sms_gatway_link: {
			type: DataTypes.STRING(200),
			allowNull: true
		}
	}, {
		tableName: 'sms_getting_setting'
	});
};
