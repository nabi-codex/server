'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Complaint extends Model {

        static associate(models) {

        }
    }

    Complaint.init({
        title: {
            type: DataTypes.STRING(255)
        },
        message: {
            type: DataTypes.STRING(255)
        },
        byCustomer: {
            type: DataTypes.BOOLEAN
        },
    }, {
        sequelize,
        modelName: 'Complaint',
    });
    return Complaint;
};