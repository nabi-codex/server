'use strict';
const {Model} = require('sequelize');
const ip = require('ip');

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {

        static associate(models) {

        }
    }

    Product.init({
        sku: {
            type: DataTypes.STRING(45)
        },
        slug: {
            type: DataTypes.STRING(145)
        },
        shortDescription: {
            type: DataTypes.STRING(255)
        },
        langDescription: {
            type: DataTypes.TEXT
        },
        image: {
            type: DataTypes.STRING(255),
            get() {
                if (this.getDataValue('image')) {
                    const port = process.env.PORT || 9009
                    return `http://${ip.address()}:${port}/files/images/${this.getDataValue('image')}`
                }
            }
        },
        price: {
            type: DataTypes.FLOAT
        },
        promo: {
            type: DataTypes.FLOAT
        },
        wholesalePrice: {
            type: DataTypes.INTEGER
        },
        initialQuantity: {
            type: DataTypes.INTEGER
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        isStock: {
            type: DataTypes.BOOLEAN
        },
        state: {
            type: DataTypes.INTEGER
        },
    }, {
        sequelize,
        modelName: 'product',
        tableName: 'product',
    });
    return Product;
};