/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('adv_vote', {
		idadv_vote: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		adv_vote_no: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		adv_vote_table_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		key: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'adv_vote'
	});
};
