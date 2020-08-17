/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('de', {
		idde: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		receipt_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		appcat_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		staus: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		dayendtime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		comment: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		receipt_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		}
	}, {
		tableName: 'de'
	});
};
