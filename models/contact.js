/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('contact', {
		idContact: {
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
		phone: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		mobile: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		address1: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		address2: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		address3: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		city: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		statues: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'contact'
	});
};
