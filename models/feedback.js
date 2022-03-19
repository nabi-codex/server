'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Feedback extends Model {

        static associate(models) {

        }
    }

    Feedback.init({
        comment: {
            type: DataTypes.STRING(255)
        },
        rating: {
            type: DataTypes.DOUBLE
        },
        image: {
            type: DataTypes.STRING(255)
        },

    }, {
        sequelize,
        modelName: 'feedback',
        tableName: 'feedback',
    });
    return Feedback;
};