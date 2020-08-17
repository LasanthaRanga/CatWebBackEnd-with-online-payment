/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_m_last_proc_year_month', {
		last_proc_year_month_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		last_proc_year_month_division_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'wb_m_devision',
				key: 'devision_id'
			},
			unique: true
		},
		last_proc_year_month_year: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		last_proc_year_month_month: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		next_proc_year_month_year: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		next_proc_year_month_month: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		next_proc_code_first: {
			type: DataTypes.STRING(10),
			allowNull: true
		}
	}, {
		tableName: 'wb_m_last_proc_year_month'
	});
};
