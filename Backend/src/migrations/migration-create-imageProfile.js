'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('ImageProfiles', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
                defaultValue: () => uuidv4() // tạo chuỗi ngẫu nhiên khi tạo mới User
            },
            userID: {
                type: Sequelize.STRING,
            },
            fileName: {
                type: Sequelize.STRING
            },
            fileType: {
                type: Sequelize.STRING
            },
            fileSize: {
                type: Sequelize.INTEGER
            },
            fileUrl: { // thay đổi trường filePath thành fileUrl
                type: Sequelize.STRING
            },
            data: {
                type: Sequelize.BLOB('long')
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('ImageProfiles');
    }
};