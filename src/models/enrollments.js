"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Enrollments extends Model {
      
        static associate(models) {
            Enrollments.belongsTo(models.People, {
                foreignKey: "studentId"
            });
            Enrollments.belongsTo(models.Classes, {
                foreignKey: "classId"
            });
        }
    }
    Enrollments.init({
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: "Enrollments",
        paranoid: true
    });
    return Enrollments;
};