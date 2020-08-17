/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('referenceno', {
		idReferenceNo: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		app_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		refno: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		oder: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		customers_idCustomer: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'customer',
				key: 'idCustomer'
			}
		},
		application_catagory_idApplication_Catagory: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'application_catagory',
				key: 'idApplication_Catagory'
			}
		},
		office_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'referenceno'
	});
};
