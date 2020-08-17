/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('book', {
		idbook: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		book_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		customer_idCustomer: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		book_amount: {
			type: "DOUBLE",
			allowNull: true
		},
		book_diposit: {
			type: "DOUBLE",
			allowNull: true
		},
		book_vat: {
			type: "DOUBLE",
			allowNull: true
		},
		book_nbt: {
			type: "DOUBLE",
			allowNull: true
		},
		book_stamp: {
			type: "DOUBLE",
			allowNull: true
		},
		book_total: {
			type: "DOUBLE",
			allowNull: true
		},
		book_cash: {
			type: "DOUBLE",
			allowNull: true
		},
		book_chque: {
			type: "DOUBLE",
			allowNull: true
		},
		book_chque_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		book_book_pay_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		book_book_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		book_idRecipt: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		book_reson_idbook_reson: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'book_reson',
				key: 'idbook_reson'
			}
		},
		book_place_idbook_place: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'book_place',
				key: 'idbook_place'
			}
		},
		book_idUser: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		book_pay_type: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'book'
	});
};
