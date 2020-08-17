/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('doc_hand_oder_path', {
		oder_path_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		oder_path_form: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		priority: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		oder_path_name: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		application_category: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'application_catagory',
				key: 'idApplication_Catagory'
			}
		}
	}, {
		tableName: 'doc_hand_oder_path'
	});
};
