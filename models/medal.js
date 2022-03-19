'use strict';
const {Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Medal extends Model {

        static associate(models) {
            // define association here
        }
    }

    Medal.init({
        name: {
            type: DataTypes.STRING(145)
        },
        iconImage: {
            type: DataTypes.STRING(255)
        },
        image: {
            type: DataTypes.STRING(145)
        },
        condition: {
            type: DataTypes.STRING(145)
        },
    }, {
        sequelize,
        modelName: 'medal',
        tableName: 'medal',
    });
    return Medal;
};