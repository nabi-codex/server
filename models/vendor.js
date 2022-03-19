'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Vendor extends Model {

        static associate(models) {

        }
    }

    Vendor.init({
        name: {
            type: DataTypes.STRING(45),
        },
        username: {
            type: DataTypes.STRING(45),
        },
        shortDescription: {
            type: DataTypes.STRING(45),
        },
        langDescription: {
            type: DataTypes.TEXT,//change
        },
        phone1: {
            type: DataTypes.STRING(15),
        },
        phone2: {
            type: DataTypes.STRING(15),
        },
        phone3: {
            type: DataTypes.STRING(15),
        },
        email: {
            type: DataTypes.STRING(45),
        },
        webSite: {
            type: DataTypes.STRING(45),
        },
        iconImg: {
            type: DataTypes.STRING(255),
        },
        coverImg: {
            type: DataTypes.STRING(255),
        },
        socialFb: {
            type: DataTypes.STRING(145),
        },
        socialYt: {
            type: DataTypes.STRING(145),
        },
        socialTw: {
            type: DataTypes.STRING(145),
        },
        socialTk: {
            type: DataTypes.STRING(145),
        },
        socialIg: {
            type: DataTypes.STRING(145),
        },
        isActive: {
            type: DataTypes.BOOLEAN
        },
        isPageVisible: {
            type: DataTypes.BOOLEAN
        },
        isProductVisible: {
            type: DataTypes.BOOLEAN
        },
        isMaintenance: {
            type: DataTypes.BOOLEAN
        },
    }, {
        sequelize,
        modelName: 'vendor',
        tableName: 'vendor',
    });
    return Vendor;
};