/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mixintype', {
		idMixintype: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		mixintype_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		account_receipt_title_idAccount_receipt_title: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'account_receipt_title',
				key: 'idAccount_receipt_title'
			}
		},
		mixintype_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		bankinfo_idBank: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		active_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		office_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		extra_int: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		extra_string: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'mixintype'
	});
};
