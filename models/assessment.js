/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('assessment', {
		idAssessment: {
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
			},
			unique: true
		},
		Ward_idWard: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'ward',
				key: 'idWard'
			}
		},
		Street_idStreet: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'street',
				key: 'idStreet'
			}
		},
		ass_nature_idass_nature: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'ass_nature',
				key: 'idass_nature'
			}
		},
		ass_discription_idass_discription: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'ass_discription',
				key: 'idass_discription'
			}
		},
		User_idUser: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'user',
				key: 'idUser'
			}
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
		office_idOffice: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'assessment'
	});
};
