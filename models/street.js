/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('street', {
		idStreet: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		street_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		street_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		street_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		street_syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		street_coment: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Ward_idWard: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'ward',
				key: 'idWard'
			}
		},
		street_name_sinhala: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		street_width: {
			type: "DOUBLE",
			allowNull: true
		},
		Street_line_limit: {
			type: "DOUBLE",
			allowNull: true
		},
		street_code: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'street'
	});
};
