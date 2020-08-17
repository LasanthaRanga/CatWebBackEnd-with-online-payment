/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('street_copy', {
		idStreet: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Ward_idWard: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'ward',
				key: 'idWard'
			}
		},
		street_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		strret_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'street_copy'
	});
};
