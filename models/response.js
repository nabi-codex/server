'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Response extends Model {

        static associate(models) {

        }
    }

    Response.init({
        message: {
            type: DataTypes.STRING(255)
        }
    }, {
        sequelize,
        modelName: 'response',
        tableName: 'response',
    });
    return Response;
};