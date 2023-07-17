"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Classes", [
            {
                startDate: "2020-02-01",
                levelId: 1,
                teacherId: 15,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                startDate: "2020-02-01",
                levelId: 2,
                teacherId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                startDate: "2020-02-01",
                levelId: 3,
                teacherId: 15,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                startDate: "2020-07-01",
                levelId: 3,
                teacherId: 15,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Classes", null, {});
    }
};
