"use strict";
const { required } = require("nodemon/lib/config");
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {

        static associate(models) {
            // define association here
        }
    }
    Users.init({
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            required: true,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: DataTypes.STRING,
        salt: DataTypes.STRING,
        passwordResetToken: {
            type: DataTypes.STRING,
            select: false,
        },
        passwordResetExpires: {
            type: DataTypes.DATE,
            select: false,
        },
    }, {
        sequelize,
        modelName: "Users",
    });
    return Users;
};