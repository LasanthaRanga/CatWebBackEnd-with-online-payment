/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wb_t_vote_category', {
		wb_t_vote_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		wb_t_vote_name: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		wb_t_LYA_vote: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_t_LMA_vote: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_t_TMA_vote: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_t_OP_vote: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_t_VAT: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_t_cash: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_t_cheque: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		wb_t_account_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'wb_t_vote_category'
	});
};
