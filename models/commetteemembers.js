/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('commetteemembers', {
		idCommetteeMembers: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		memberId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'user',
				key: 'idUser'
			}
		},
		bopid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		vote: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		bopcommetteeid: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'bophascommettee',
				key: 'idBopHasCommettee'
			}
		},
		application_cat_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'commetteemembers'
	});
};
