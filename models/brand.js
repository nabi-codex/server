'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Brand extends Model {
        static associate(models) {

        }
    }

    Brand.init({
        name: {
            type: DataTypes.STRING(145),
        },
        image: {
            type: DataTypes.STRING(145),
        },
        iconImg: {
            type: DataTypes.STRING(255),
        },
        slug: {
            type: DataTypes.STRING(145),
        },
        description: {
            type: DataTypes.STRING(145),
        },
        /*
        * createdBy: {
            type: DataTypes.INTEGER
        },
        updatedBy: {
            type: DataTypes.INTEGER
        },
        * */

    }, {
        sequelize,
        modelName: 'brand',
        tableName: 'brand'
    });
    return Brand;
};