/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ass_allocation', {
		idass_allocation: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ass_allocation: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_allocation_status: {
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
		},
		ass_allocation_change_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		ass_allocation_discription: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		ass_allocation_idUser: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'ass_allocation'
	});
};
