/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sms_details', {
		sms_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sms_application_cat_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sms_oder: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sms_header: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sms_descrip_1: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sms_descrip_2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sms_descrip_3: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sms_descrip_4: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sms_descrip_5: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sms_descrip_6: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sms_descrip_7: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sms_signature: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sms_signature_2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sms_signature_3: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sms_send_or_not: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'sms_details'
	});
};
