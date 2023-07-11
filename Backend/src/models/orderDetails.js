'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
    class OrderDetails extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    OrderDetails.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: () => uuidv4() // tạo chuỗi ngẫu nhiên khi tạo mới User
        },
        userID: DataTypes.STRING,
        orderID: DataTypes.STRING,
        productID: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
        address: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'OrderDetails',
    });
    return OrderDetails;
};