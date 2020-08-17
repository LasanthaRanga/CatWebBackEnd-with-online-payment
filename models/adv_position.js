/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('adv_position', {
		idAdv_position: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		adv_position_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		adv_position_limit: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_position_owner: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		adv_position_nic: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		adv_position_assessmant_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		adv_position_address: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		adv_position_ground_rent: {
			type: "DOUBLE",
			allowNull: true
		},
		adv_position_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		adv_position_syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'adv_position'
	});
};
