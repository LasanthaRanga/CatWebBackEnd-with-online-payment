/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('steps', {
		idSteps: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		unique_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'unique',
				key: 'idUnique'
			}
		},
		step_no: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		step_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		comemts: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		image: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sms: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		dateandtime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		user_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ucat_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		user_cat: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'steps'
	});
};
