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
            classId: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            status: "confirmado",
            studentId: 3,
            classId: 11,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            status: "cancelado",
            studentId: 17,
            classId: 12,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            status: "cancelado",
            studentId: 16,
            classId: 12,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Enrollments", null, {});
    }
};
