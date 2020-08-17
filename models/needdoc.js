/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('needdoc', {
		idNeedDoc: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		NeedDoc_priority: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Application_Catagory_idApplication_Catagory: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'application_catagory',
				key: 'idApplication_Catagory'
			}
		},
		Doccat_idDoccat: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'doccat',
				key: 'idDoccat'
			}
		}
	}, {
		tableName: 'needdoc'
	});
};
