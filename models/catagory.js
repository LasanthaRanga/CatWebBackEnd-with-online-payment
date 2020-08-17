/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('catagory', {
		idCatagory: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		catagory_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		catagory_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		Catagorycol: {
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
		tableName: 'catagory'
	});
};
