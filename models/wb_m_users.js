/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_m_users', {
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_name: {
			type: DataTypes.STRING(15),
			allowNull: true,
			unique: true
		},
		user_level: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_u_level',
				key: 'l_id'
			}
		},
		pwd: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		date_created: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		date_modified: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		approved: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		}
	}, {
		tableName: 'wb_m_users'
	});
};
