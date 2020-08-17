/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('assess_allocation_process_data', {
		idAssessment: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		Customer_idCustomer: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Ward_idWard: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Street_idStreet: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ass_nature_idass_nature: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ass_discription_idass_discription: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		User_idUser: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		assessment_oder: {
			type: "DOUBLE",
			allowNull: true
		},
		assessment_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		assessment_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		assessment_syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		assessment_comment: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		assessment_obsolete: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		idass_allocation: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		ass_allocation: {
			type: "DOUBLE",
			allowNull: true
		},
		ass_allocation_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
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
		},
		Processtype_idProcesstype: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Assessment_has_Processtype_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		Assessment_has_Processtype_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		idProcesstype: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		Processtype_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		idAssessment_has_Processtype: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		}
	}, {
		tableName: 'assess_allocation_process_data'
	});
};
