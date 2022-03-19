'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ProductOptions extends Model {

        static associate(models) {

        }
    }

    ProductOptions.init({
        name: {
            type: DataTypes.STRING(45)
        },
        isMulti: {
            type: DataTypes.BOOLEAN
        },
        isRequired: {
            type: DataTypes.BOOLEAN
        },

    }, {
        sequelize,
        modelName: 'productOptions',
        tableName: 'productOptions',
    });
    return ProductOptions;
};