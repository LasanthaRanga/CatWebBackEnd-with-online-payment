/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('adv_bords', {
		idAdv_Bords: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		adv_bord_width: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_bord_height: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_bord_square_feet: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_bord_qty: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_bord_single_or_double: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		adv_bord_unit_price: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_bord_ground_rent: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_bord_total_price: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_bord_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		adv_bord_syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Adv_position_idAdv_position: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'adv_position',
				key: 'idAdv_position'
			}
		},
		Adv_Advertising_idAdv_Advertising: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'adv_advertising',
				key: 'idAdv_Advertising'
			}
		},
		Adv_board_Type_idAdv_board_Type: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'adv_board_type',
				key: 'idAdv_board_Type'
			}
		}
	}, {
		tableName: 'adv_bords'
	});
};
