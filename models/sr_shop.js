/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_shop', {
		idsr_shop: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sr_shop_no: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		sr_shop_number: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_dis: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		sr_flow_idsr_flow: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'sr_flow',
				key: 'idsr_flow'
			}
		},
		sr_shop_type_idsr_shop_type: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'sr_shop_type',
				key: 'idsr_shop_type'
			}
		},
		sr_building_idsr_building: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'sr_building',
				key: 'idsr_building'
			}
		},
		cusname: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		address: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Customer_idCustomer: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sr_shop_fine_proc_category_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'sr_shop_fine_proc_category',
				key: 'sr_shop_fine_proc_id'
			}
		},
		sub_office_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'office',
				key: 'idOffice'
			}
		}
	}, {
		tableName: 'sr_shop'
	});
};
