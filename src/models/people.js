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
                foreignKey: "studentId"
            });
        }
    }
    People.init({
        name: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        email: DataTypes.STRING,
        role: DataTypes.STRING
    }, {
        sequelize,
        paranoid: true,
        modelName: "People"
    });
    return People;
};