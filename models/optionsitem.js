'use strict';
const {Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class OptionsItem extends Model {

        static associate(models) {

        }
    }

    OptionsItem.init({
        name: {
            type: DataTypes.STRING(45)
        },
        color: {
            type: DataTypes.STRING(45)
        },
        price: {
            type: DataTypes.FLOAT
        },
        image: {
            type: DataTypes.STRING(255)
        },
    }, {
        sequelize,
        modelName: 'optionsItem',
        tableName: 'optionsItem',
    });
    return OptionsItem;
};