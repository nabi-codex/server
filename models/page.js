'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Page extends Model {

        static associate(models) {

        }
    }

    Page.init({
        title: {
            type: DataTypes.STRING(145),
        },
        subTitle: {
            type: DataTypes.STRING(145),
        },
        slug: {
            type: DataTypes.STRING(145),
        },
        contentHtml: {
            type: DataTypes.TEXT
        },
        createdBy: {
            type: DataTypes.INTEGER
        },
        updatedBy: {
            type: DataTypes.INTEGER
        },
    }, {
        sequelize,
        modelName: 'page',
        tableName: 'page',
    });
    return Page;
};