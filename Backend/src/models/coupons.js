'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
    class Coupons extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Coupons.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: () => uuidv4() // tạo chuỗi ngẫu nhiên khi tạo mới User
        },
        productID: DataTypes.STRING,
        code: DataTypes.STRING,
        discountRate: DataTypes.INTEGER,
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'Coupons',
    });
    return Coupons;
};