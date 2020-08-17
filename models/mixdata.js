/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mixdata', {
		idMixdata: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		md_description: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		md_amount: {
			type: "DOUBLE",
			allowNull: true
		},
		md_vat: {
			type: "DOUBLE",
			allowNull: true
		},
		md_nbt: {
			type: "DOUBLE",
			allowNull: true
		},
		md_stamp: {
			type: "DOUBLE",
			allowNull: true
		},
		md_total: {
			type: "DOUBLE",
			allowNull: true
		},
		mixintype_idMixintype: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'mixintype',
				key: 'idMixintype'
			}
		},
		mixincome_IdMixincome: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'mixincome',
				key: 'idMixincome'
			}
		}
	}, {
		tableName: 'mixdata'
	});
};
