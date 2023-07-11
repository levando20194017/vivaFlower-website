'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
    class ImageProducts extends Model {
        static associate(models) {
            // ImageProducts.belongsTo(models.Products);
        }
    };
    ImageProducts.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: () => uuidv4() // tạo chuỗi ngẫu nhiên khi tạo mới User
        },
        productID: DataTypes.STRING,
        fileName: DataTypes.STRING,
        fileType: DataTypes.STRING,
        fileSize: DataTypes.INTEGER,
        fileUrl: DataTypes.STRING, // thay đổi trường filePath thành fileUrl
        data: DataTypes.BLOB('long'),
    }, {
        sequelize,
        modelName: 'ImageProducts',
    });
    return ImageProducts;
};