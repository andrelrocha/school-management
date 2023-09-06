"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn("Users", "passwordResetExpires", {
            allowNull: true,
            type: Sequelize.DATE
        });
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.removeColumn("Users", "passwordResetExpires");
    }
};
