/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";
const {
    Model
} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class People extends Model {
        
        static associate(models) {
            People.hasMany(models.Classes, {
                foreignKey: "teacherId"
            });
            People.hasMany(models.Enrollments, {
                foreignKey: "studentId",
                
                //define a scope is a better way to filter data than using where, computationally speaking
                scope: { status: "confirmado" },
                as: "confirmedEnrollments"
            });
        }
    }
    People.init({
        name: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        email: {
            type: DataTypes.STRING, 
            unique: true,
            validate: {
                isEmail: {
                    msg: "Invalid email"
                }
            }
        },
        role: DataTypes.STRING
    }, {
        sequelize,
        paranoid: true,
        modelName: "People",
        defaultScope: {
            where: { active: true }
        },
        scopes: {
            all: { where: {} }
        }
    });
    return People;
};