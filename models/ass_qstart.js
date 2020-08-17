/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ass_qstart', {
		idass_Qstart: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ass_Qstart_QuaterNumber: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		ass_Qstart_process_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		ass_Qstart_LY_Arreas: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_Qstart_LY_Warrant: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_Qstart_LYC_Arreas: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_Qstart_LYC_Warrant: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_Qstart_LQ_Arreas: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_Qstart_LQC_Arreas: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_Qstart_LQ_Warrant: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_Qstart_LQC_Warrant: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_Qstart_HaveToQPay: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_Qstart_QPay: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_Qstart_QDiscont: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_Qstart_QTot: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_Qstart_FullTotal: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_Qstart_status: {
			type: DataTypes.INTEGER(1),
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
		ass_Qstart_year: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		process_update_warant: {
			type: "DOUBLE",
			allowNull: true
		},
		process_update_arrears: {
			type: "DOUBLE",
			allowNull: true
		},
		process_update_comment: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ass_Qstart_tyold_arrias: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_Qstart_tyold_warant: {
			type: "DOUBLE",
			allowNull: true
		}
	}, {
		tableName: 'ass_qstart'
	});
};
