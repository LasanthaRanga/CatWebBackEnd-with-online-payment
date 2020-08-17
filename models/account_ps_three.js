/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('account_ps_three', {
		idReport: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		report_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		report_ricipt_no: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		report_ricipt_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		report_vort_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		report_account_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		report_amount: {
			type: "DOUBLE",
			allowNull: true
		},
		report_user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		report_application_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		report_application_cat_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		report_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		office_idOffice: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'account_ps_three'
	});
};
