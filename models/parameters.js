'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Parameters extends Model {

        static associate(models) {

        }
    }

    Parameters.init({
        homePageJson: {
            type: DataTypes.TEXT
        },
        productJson: {
            type: DataTypes.TEXT
        },
    }, {
        sequelize,
        modelName: 'parameters',
    });
    return Parameters;
};