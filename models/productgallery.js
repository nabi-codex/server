'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ProductGallery extends Model {

        static associate(models) {
            // define association here
        }
    }

    ProductGallery.init({
        name: {
            type: DataTypes.STRING(255),
        },
        productId: {//ref
            type: DataTypes.INTEGER
        }
    }, {
        sequelize,
        modelName: 'productGallery',
        tableName: 'productGallery',
    });
    return ProductGallery;
};