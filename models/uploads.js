/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('uploads', {
		idUploads: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Doccat_idDoccat: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'doccat',
				key: 'idDoccat'
			}
		},
		Application_Catagory_idApplication_Catagory: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'application_catagory',
				key: 'idApplication_Catagory'
			}
		},
		idApplication: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Uploads_path: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Uploads_count: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Uploads_title: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		Uploads_others: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		customer: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'customer',
				key: 'idCustomer'
			}
		}
	}, {
		tableName: 'uploads'
	});
};
