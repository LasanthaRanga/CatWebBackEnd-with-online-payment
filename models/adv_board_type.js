/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('adv_board_type', {
		idAdv_board_Type: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		adv_board_Type_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		adv_bord_type_price: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_bord_type_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		adv_bord_type_syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'adv_board_type'
	});
};
