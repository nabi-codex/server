'use strict';
const {lang} = require("../models")

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('lang', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING(45)
            },
            data: {
                type: Sequelize.STRING(10),
            },
            description: {
                type: Sequelize.STRING(255),
            },
            code: {
                type: Sequelize.STRING(10),
            },
            flag: {
                type: Sequelize.STRING(255),
            },
            isExtraId: {
                type: Sequelize.INTEGER
            },
            file: {
                type: Sequelize.STRING(255),
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
        await queryInterface.dropTable('lang');
    }
};