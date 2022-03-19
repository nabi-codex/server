'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class OrderItem extends Model {

        static associate({product, order}) {
            order.belongsToMany(product, {through: 'orderItem', foreignKey: 'orderId'});
            product.belongsToMany(order, {through: 'orderItem', foreignKey: 'productId'});

        }
    }

    OrderItem.init({
        productName: {
            type: DataTypes.STRING(255)
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.FLOAT
        },
        totalPrice: {
            type: DataTypes.FLOAT
        },
        comment: {
            type: DataTypes.STRING(255)
        },

    }, {
        sequelize,
        modelName: 'orderItem',
        tableName: 'orderItem',
    });
    return OrderItem;
};