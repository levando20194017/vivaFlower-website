'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
    class Orders extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Orders.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: () => uuidv4() // tạo chuỗi ngẫu nhiên khi tạo mới User
        },
        userID: DataTypes.STRING,
        shippingMethodID: DataTypes.STRING,
        paymentMethodID: DataTypes.STRING,
        couponID: DataTypes.STRING,
        status: DataTypes.STRING,
        total: DataTypes.INTEGER,
        shippingAddress: DataTypes.STRING,
        note: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Orders',
    });
    return Orders;
};