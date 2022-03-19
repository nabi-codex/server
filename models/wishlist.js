'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Wishlist extends Model {

        static associate(models) {
            //many to many
        }
    }

    Wishlist.init({
        customerId: {
            type: DataTypes.INTEGER
        },
        productId: {
            type: DataTypes.INTEGER
        },
    }, {
        sequelize,
        modelName: 'wishlist',
        tableName: 'wishlist',
    });
    return Wishlist;
};