/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ward', {
		idWard: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ward_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		ward_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		ward_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ward_syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ward_comment: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ward_Code: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		office_idOffice: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'ward'
	});
};
