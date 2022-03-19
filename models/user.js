'use strict';
const {Model} = require('sequelize');

const {hashPassword} = require('../crypto/cryoto');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {

        static associate(models) {

        }
    }

    User.init({
        firstName: {
            type: DataTypes.STRING(100),
            /*
            * validate: {
                len: [1, 100],
                notNull: {msg: 'first name  must have a role'},
                notEmpty: {msg: 'first name must not be empty'},
            }
            * */
        },
        lastName: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                len: [1, 100],
            }
        },
        phone: {
            type: DataTypes.STRING(15),
            validate: {
                is: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
            }
        },
        password: {
            type: DataTypes.STRING(255),
            validate: {
                len: [1, 30]// replace
            },
            set(value) {
                this.setDataValue('password', hashPassword(value));
            },
        },
        email: {
            type: DataTypes.STRING(15),
            validate: {
                isEmail: true,
                len: [1, 30]
            }
        },
        address: {
            type: DataTypes.STRING(155),
        },
        address2: {
            type: DataTypes.STRING(155),
        },
        affCode: {
            type: DataTypes.STRING(45),
        },
        affBy: {//ref
            type: DataTypes.INTEGER
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        isConfirmedEmail: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        isConfirmedPhone: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'user',
        tableName: 'user',
    });
    return User;
};