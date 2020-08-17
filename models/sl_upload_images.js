/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sl_upload_images', {
		image_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nic_path: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		doc_path: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		nv_doc_path: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		doc_web_path: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		bop_doc_path: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ba_doc_path: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ba_doc_web_path: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'sl_upload_images'
	});
};
