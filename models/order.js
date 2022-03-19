'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {

        static associate(models) {

        }
    }

    Order.init({
        state: {
            type: DataTypes.STRING
        },
        totalPrice: {
            type: DataTypes.FLOAT
        },
        totalPromoPrice: {
            type: DataTypes.FLOAT
        },
        totalWithPromo: {
            type: DataTypes.FLOAT
        },
        totalShipping: {
            type: DataTypes.INTEGER
        },
        totalTax: {
            type: DataTypes.INTEGER
        },
        totalAmount: {
            type: DataTypes.INTEGER
        },
        websiteCommission: {
            type: DataTypes.INTEGER
        },
        customerName: {
            type: DataTypes.STRING(255)
        },
        customerCountry: {
            type: DataTypes.STRING(45)
        },
        customerPhone: {
            type: DataTypes.STRING(45)
        },
        customerEmail: {
            type: DataTypes.STRING(45)
        },
        comment: {
            type: DataTypes.STRING(255),
        },
        finishedAt:{
            type: DataTypes.DATE
        }

    }, {
        sequelize,
        modelName: 'order',
        tableName: 'order',
    });
    return Order;
};