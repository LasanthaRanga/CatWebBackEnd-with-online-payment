/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('apprualstatues', {
		idApprualStatues: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		User_idUser: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'user',
				key: 'idUser'
			}
		},
		Application_idApplication: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'application',
				key: 'idApplication'
			}
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		SendDate: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		approveDate: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		idOtheritisCat: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		statues: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ResiveUser: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'apprualstatues'
	});
};
