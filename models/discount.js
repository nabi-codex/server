'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Discount extends Model {

        static associate(models) {
        }
    }

    Discount.init({
        name: {
            type: DataTypes.STRING(45)
        },
        coupon: {
            type: DataTypes.STRING(45)
        },
        value: {
            type: DataTypes.INTEGER
        },
        type: {
            type: DataTypes.INTEGER
        },
        startDate: {
            type: DataTypes.DATE
        },
        endDate: {
            type: DataTypes.DATE
        },
        state: {
            type: DataTypes.INTEGER
        },
    }, {
        sequelize,
        modelName: 'discount',
        tableName: 'discount',
    });
    return Discount;
};