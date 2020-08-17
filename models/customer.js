/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('customer', {
		idCustomer: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cus_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		cus_person_title: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		cus_nic: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		cus_mobile: {
			type: DataTypes.STRING(45),
			allowNull: true,
			defaultValue: ''
		},
		cus_tel: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		cus_address_l1: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		cus_address_l2: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		cus_address_l3: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		cus_sity: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		cus_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		cus_syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		cus_reg_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		cus_update_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		cus_name_sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		},
		cus_address_l1_sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		cus_address_l2_sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		cus_address_l3_sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'customer'
	});
};
