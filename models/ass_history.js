/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ass_history', {
		idass_history: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ass_history_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		ass_history_discription: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		ass_history_old_allocation: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_history_new_allocation: {
			type: "DOUBLE",
			allowNull: true
		},
		idUser: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Assessment_idAssessment: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'assessment',
				key: 'idAssessment'
			}
		}
	}, {
		tableName: 'ass_history'
	});
};
