/* eslint-disable linebreak-style */
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn("People", "age", {
            type: Sequelize.INTEGER,
            allowNull: false,
        });
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.removeColumn("People", "age");
    }
};
