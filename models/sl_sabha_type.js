/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sl_sabha_type', {
		sl_sabha_type_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sl_sabha_type: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'sl_la_type',
				key: 'la_type_id'
			}
		},
		application_cat_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'application_catagory',
				key: 'idApplication_Catagory'
			}
		}
	}, {
		tableName: 'sl_sabha_type'
	});
};
