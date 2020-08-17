/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bank_info', {
		idBank_Info: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		bank_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		acount_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		acount_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		current_ballance: {
			type: "DOUBLE",
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
		tableName: 'bank_info'
	});
};
