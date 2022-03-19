'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class City extends Model {

        static associate(models) {
            // define association here
        }
    }

    City.init({
        name: {
            type: DataTypes.STRING(45),
        },
        zipCode: {
            type: DataTypes.STRING(5),
        },
        provinceId: {//ref
            type: DataTypes.INTEGER
        },
        countryId: {//ref
            type: DataTypes.INTEGER
        },
    }, {
        sequelize,
        modelName: 'city',
        tableName: 'city',
    });
    return City;
};