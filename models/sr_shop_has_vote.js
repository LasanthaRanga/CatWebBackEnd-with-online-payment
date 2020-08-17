/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sr_shop_has_vote', {
		shop_has_vote_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		vote_shop_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'sr_shop',
				key: 'idsr_shop'
			}
		},
		sr_shop_vote_category_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'sr_shop_votes_category',
				key: 'sr_shop_vote_category_id'
			}
		},
		vote_status: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		}
	}, {
		tableName: 'sr_shop_has_vote'
	});
};
