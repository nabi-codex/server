'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Country extends Model {

        static associate(models) {
            // define association here
        }
    }

    Country.init({
        name: {
            type: DataTypes.STRING(155),
        },
        flagImage: {
            type: DataTypes.STRING(255),
        },
        isoCode: {
            type: DataTypes.STRING(5),
        },
        phoneCode: {
            type: DataTypes.STRING(5),
        },
    }, {
        sequelize,
        modelName: 'Country',
    });
    return Country;
};