/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ass_payhistry', {
		idass_PayHistry: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ass_PayHistry_Qcunt: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		ass_PayHistry_year: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ass_PayHistry_Date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		ass_PayHistry_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		ass_PayHistry_comment: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ass_PayHistry_TotalPayid: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_PayHistry_Q1: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_PayHistry_Q2: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_PayHistry_Q3: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_PayHistry_Q4: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_PayHistry_Over: {
			type: "DOUBLE",
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
		ass_PayHistry_DRQ1: {
			type: "DOUBLE(11,0)",
			allowNull: true
		},
		ass_PayHistry_DRQ2: {
			type: "DOUBLE(11,0)",
			allowNull: true
		},
		ass_PayHistry_DRQ3: {
			type: "DOUBLE(11,0)",
			allowNull: true
		},
		ass_PayHistry_DRQ4: {
			type: "DOUBLE(11,0)",
			allowNull: true
		},
		ass_PayHistry_Q1Status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ass_PayHistry_Q2Status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ass_PayHistry_Q3Status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ass_PayHistry_Q4Status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'ass_payhistry'
	});
};
