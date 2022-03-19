'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Currency extends Model {

        static associate(models) {

        }
    }

    Currency.init({
        name: {
            type: DataTypes.STRING(45),
        },
        code: {
            type: DataTypes.STRING(10),
        },
        symbol: {
            type: DataTypes.STRING(5),
        },
        change_rate: {
            type: DataTypes.FLOAT,
        },
        is_default: {
            type: DataTypes.BOOLEAN
        },
    }, {
        sequelize,
        modelName: 'currency',
        tableName: 'currency'
    });
    return Currency;
};