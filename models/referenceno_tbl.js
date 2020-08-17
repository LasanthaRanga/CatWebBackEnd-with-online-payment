/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('referenceno_tbl', {
		idReferenceNo_tbl: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		refno: {
			type: DataTypes.STRING(45),
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
		application_catagory_idApplication_Catagory: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'application_catagory',
				key: 'idApplication_Catagory'
			}
		}
	}, {
		tableName: 'referenceno_tbl'
	});
};
