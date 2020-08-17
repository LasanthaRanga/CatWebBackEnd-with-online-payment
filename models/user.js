/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user', {
		idUser: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_full_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		user_nic: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		user_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		user_birth_day: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		user_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		user_syn: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		user_question: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		user_answer: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		user_username: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		user_password: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		user_level: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'user_level',
				key: 'user_level_id'
			}
		},
		office_idOffice: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		user_name_sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		mobile_no: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'user'
	});
};
