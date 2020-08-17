/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_print_vote_bill_name', {
		sr_print_vote_name_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		sr_print_vote_name: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		sr_print_vote_order: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'sr_print_vote_bill_name'
	});
};
