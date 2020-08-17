/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dipartment', {
		idDipartment: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		dip_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		dip_head: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		dip_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		dip_syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'dipartment'
	});
};
