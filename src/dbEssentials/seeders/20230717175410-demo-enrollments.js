"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Enrollments", [{
            status: "confirmado",
            studentId: 10,
            classId: 9,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            status: "confirmado",
            studentId: 6,
            classId: 9,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            status: "confirmado",
            studentId: 4,
            classId: 17,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            status: "confirmado",
            studentId: 3,
            classId: 17,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            status: "cancelado",
            studentId: 17,
            classId: 19,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            status: "cancelado",
            studentId: 16,
            classId: 19,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Enrollments", null, {});
    }
};
