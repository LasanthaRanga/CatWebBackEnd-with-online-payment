/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('book_date', {
		idbook_date: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		book_idbook: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'book',
				key: 'idbook'
			}
		},
		book_date_day: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		book_date_start: {
			type: DataTypes.TIME,
			allowNull: true
		},
		book_date_end: {
			type: DataTypes.TIME,
			allowNull: true
		},
		book_date_amount: {
			type: "DOUBLE",
			allowNull: true
		},
		book_date_diposit: {
			type: "DOUBLE",
			allowNull: true
		}
	}, {
		tableName: 'book_date'
	});
};
