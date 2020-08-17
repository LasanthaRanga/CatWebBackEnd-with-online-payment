/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('vort', {
		idVort: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Program_SubTitle_idProgram_SubTitle: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'program_subtitle',
				key: 'idprogram_subtitle'
			}
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
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		syn: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Bank_Info_idBank_Info: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'bank_info',
				key: 'idBank_Info'
			}
		}
	}, {
		tableName: 'vort'
	});
};
