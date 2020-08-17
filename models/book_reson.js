/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('book_reson', {
		idbook_reson: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		book_reson_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		book_reson_dayprice: {
			type: "DOUBLE",
			allowNull: true
		},
		book_reson_houreprice: {
			type: "DOUBLE",
			allowNull: true
		},
		book_reson_idVote: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		book_reson_idAccount: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		book_reson_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		book_place_idbook_place: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'book_place',
				key: 'idbook_place'
			}
		},
		book_reson_diposit_vote: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		book_reson_diposit_amount: {
			type: "DOUBLE",
			allowNull: true
		}
	}, {
		tableName: 'book_reson'
	});
};
