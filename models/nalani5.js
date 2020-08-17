/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nalani5', {
		sr_print_vote_name: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		sr_shop_payment2_vote_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Name_exp_3: {
			type: "DOUBLE(19,2)",
			allowNull: true
		},
		sr_building_idsr_building: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'nalani5'
	});
};
