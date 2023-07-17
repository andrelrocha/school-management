"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Levels", [
            {
                desc_lvl: "basic",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                desc_lvl: "intermediate",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                desc_lvl: "advanced",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Levels", null, {});
    }
};
