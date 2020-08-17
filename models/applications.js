/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('applications', {
		idApplications: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		application_cat: {
			type: DataTypes.INTEGER(255),
			allowNull: true,
			references: {
				model: 'application_catagory',
				key: 'idApplication_Catagory'
			}
		},
		applicationId: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Street_line: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'streetline',
				key: 'idStreetLine'
			}
		},
		bop: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'bop',
				key: 'idBOP'
			}
		},
		completed: {
			type: DataTypes.INTEGER(11).UNSIGNED.ZEROFILL,
			allowNull: true,
			defaultValue: '00000000000'
		},
		idCustomer: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'customer',
				key: 'idCustomer'
			}
		}
	}, {
		tableName: 'applications'
	});
};
