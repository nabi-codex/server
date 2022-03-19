'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Province extends Model {

        static associate(models) {
        }
    }

    Province.init({
        name: {
            type: DataTypes.STRING(45),
        },
        countryId: {//ref
            type: DataTypes.INTEGER
        },
        provinceCol: {
            type: DataTypes.STRING(45),
        },
    }, {
        sequelize,
        modelName: 'province',
        tableName: 'province',
    });
    return Province;
};