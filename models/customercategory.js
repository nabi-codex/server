'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class CustomerCategory extends Model {

        static associate(models) {

        }
    }

    CustomerCategory.init({
        name: {
            type: DataTypes.STRING(145)
        }
    }, {
        sequelize,
        modelName: 'customerCategory',
        tableName: 'customerCategory',
    });
    return CustomerCategory;
};