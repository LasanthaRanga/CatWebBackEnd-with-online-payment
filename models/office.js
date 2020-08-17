/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('office', {
		idOffice: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		office_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		office_code: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		office_address: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		office_phone: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		office_oder: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		office_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		office_type_int: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		office_type_string: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'office'
	});
};
