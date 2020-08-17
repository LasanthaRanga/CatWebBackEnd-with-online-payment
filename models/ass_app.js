/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ass_app', {
		idAssapp: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		assapp_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		assapp_user: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		assapp_step: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		assapp_description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		assapp_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		assapp_type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		assapp_refno: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		assapp_names: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'ass_app'
	});
};
