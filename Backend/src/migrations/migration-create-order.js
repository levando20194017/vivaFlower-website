'use strict';
const { v4: uuidv4 } = require('uuid');
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Orders', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
                defaultValue: () => uuidv4() // tạo chuỗi ngẫu nhiên khi tạo mới User
            },
            userID: {
                type: Sequelize.STRING
            },
            shippingMethodID: {
                type: Sequelize.STRING
            },
            paymentMethodID: {
                type: Sequelize.STRING
            },
            couponID: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.STRING
            },
            total: {
                type: Sequelize.INTEGER
            },
            shippingAddress: {
                type: Sequelize.STRING
            },
            note: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Orders');
    }
};