/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sl_distance', {
		idSl_Distance: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		building_line: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		side: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		StreetLine_idStreetLine: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'sl_details',
				key: 'idStreetLine'
			}
		},
		street_idStreet: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'street',
				key: 'idStreet'
			}
		}
	}, {
		tableName: 'sl_distance'
	});
};
