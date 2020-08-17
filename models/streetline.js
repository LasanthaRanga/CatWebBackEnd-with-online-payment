/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('streetline', {
		idStreetLine: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		customer_idCustomer: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'customer',
				key: 'idCustomer'
			}
		},
		assessment_idAssessment: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'assessment',
				key: 'idAssessment'
			}
		},
		StreetLine_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		assessment_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		water_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		tradetax_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		parts_no: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		StreetLine_description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		deposit: {
			type: "DOUBLE",
			allowNull: true,
			defaultValue: '0'
		},
		amount: {
			type: "DOUBLE",
			allowNull: true
		},
		vat: {
			type: "DOUBLE",
			allowNull: true
		},
		nbt: {
			type: "DOUBLE",
			allowNull: true
		},
		approve_top_pay_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		survy_officer: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		survey_date: {
			type: DataTypes.STRING(11),
			allowNull: true
		},
		distance: {
			type: "DOUBLE",
			allowNull: true
		},
		plan_no: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		so_title: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		yes_no: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		price: {
			type: "DOUBLE(10,0)",
			allowNull: true,
			defaultValue: '0'
		}
	}, {
		tableName: 'streetline'
	});
};
