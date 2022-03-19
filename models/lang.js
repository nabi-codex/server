'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Lang extends Model {

        static associate(models) {

        }
    }

    Lang.init({
        name: {
            type: DataTypes.STRING(45),
        },
        description: {
            type: DataTypes.STRING(255),
        },
        code: {
            type: DataTypes.STRING(10),
        },
        flag: {
            type: DataTypes.STRING(255),
        },
        isExtraId: {
            type: DataTypes.INTEGER,
        },
        file: {
            type: DataTypes.STRING(255),
        },
    }, {
        sequelize,
        modelName: 'lang',
        tableName: "lang"
    });
    return Lang;
};