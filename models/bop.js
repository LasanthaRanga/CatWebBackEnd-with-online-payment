/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bop', {
		idBOP: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Customer_idCustomer: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'customer',
				key: 'idCustomer'
			}
		},
		BOP_applay_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		BOP_plan_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		BOP_urveyors name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		BOP_no: {
			type: DataTypes.STRING(45),
			allowNull: true,
			defaultValue: ''
		},
		BOP_is_markonground: {
			type: DataTypes.STRING(45),
			allowNull: true,
			defaultValue: ''
		},
		BOP_discription: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		BOP_ownership: {
			type: DataTypes.STRING(45),
			allowNull: true,
			defaultValue: ''
		},
		BOP_total_price: {
			type: "DOUBLE",
			allowNull: true,
			defaultValue: '0'
		},
		BOP_complete_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		BOP_condtion: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		BOP_regulation: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		BOP_land_size: {
			type: "DOUBLE",
			allowNull: true,
			defaultValue: '0'
		},
		BOP_survey_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		BOP_vat: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BOP_nbt: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BOP_dbt: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BOP_stamp: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BOP_other: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BOP_person_title: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'person_title',
				key: 'title_id'
			}
		},
		BOP_ref_no: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		BOP_ref_no_order: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		BOP_perpose: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		BOP_payment_btn_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'bop'
	});
};
