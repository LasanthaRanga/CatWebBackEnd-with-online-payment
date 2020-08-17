/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sl_details', {
		idStreetLine: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		application_categ: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ass_id: {
			type: DataTypes.STRING(11),
			allowNull: true
		},
		slDate: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		sllotNo: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		slPlanNo: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		slDescription: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		slDeposit: {
			type: "DOUBLE",
			allowNull: true
		},
		slAmount: {
			type: "DOUBLE",
			allowNull: true
		},
		slVat: {
			type: "DOUBLE",
			allowNull: true
		},
		slNbt: {
			type: "DOUBLE",
			allowNull: true
		},
		slStamp: {
			type: "DOUBLE",
			allowNull: true
		},
		slOther1: {
			type: "DOUBLE",
			allowNull: true
		},
		slOther2: {
			type: "DOUBLE",
			allowNull: true
		},
		slApproveToPay: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		slServayOfficer: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		slServayDate: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		slPersonTitle: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		slYesNo_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		slYesNo_id2: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		slYesNo_id3: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		slYesNo_id4: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		slYesNo_id5: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		slYesNo_id6: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		slStatus: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		office_idOffice: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'office',
				key: 'idOffice'
			}
		},
		customer_idCustomer: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'customer',
				key: 'idCustomer'
			}
		},
		sl_reference_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		slApproveDescription: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		slLandName: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		slNotatyOfficer: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		slNotaryDate: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		slDeedNo: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		slApplicantName: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		slGnId: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		slPurpose: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		slBnkorPlce: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		slPlceAddress: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		slloanAmnt: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		},
		slLandSize: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		slvillageName: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		engineer_approve: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		payment_btn_status: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'sl_details'
	});
};
