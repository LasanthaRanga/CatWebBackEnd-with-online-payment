/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('gali', {
		idGali: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Customer_idCustomer: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'customer',
				key: 'idCustomer'
			}
		},
		address_gali: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		how_to_go: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		date_gali: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		contact_gali: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		distance_gali: {
			type: "DOUBLE",
			allowNull: true
		},
		load_gali: {
			type: "DOUBLE",
			allowNull: true
		},
		Price_gali: {
			type: "DOUBLE",
			allowNull: true
		},
		VAT_gali: {
			type: "DOUBLE",
			allowNull: true
		},
		NBT_gali: {
			type: "DOUBLE",
			allowNull: true
		},
		Stamp_gali: {
			type: "DOUBLE",
			allowNull: true
		},
		Others_gali: {
			type: "DOUBLE",
			allowNull: true
		},
		Status_gali: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		syn_gali: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'gali'
	});
};
