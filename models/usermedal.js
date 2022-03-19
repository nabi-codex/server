'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class UserMedal extends Model {

        static associate(models) {
            // define association here
        }
    }

    UserMedal.init({
        isActive: {
            type: DataTypes.BOOLEAN
        },
        expiry: {//ref
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        modelName: 'userMedal',
        tableName: 'userMedal',
    });
    return UserMedal;
};