/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('vote', {
		idVote: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		vote_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		vote_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		vote_current_balance: {
			type: "DOUBLE",
			allowNull: true
		},
		vote_alocation: {
			type: "DOUBLE",
			allowNull: true
		},
		vote_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		vote_syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		program_subtitle_idprogram_subtitle: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'program_subtitle',
				key: 'idprogram_subtitle'
			}
		},
		vote_bank_account_no: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'vote'
	});
};
