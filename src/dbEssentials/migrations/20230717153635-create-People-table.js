/* eslint-disable linebreak-style */
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable("People", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            active: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
            name: { type: Sequelize.STRING, allowNull: false },
            email: { type: Sequelize.STRING, allowNull: false },
            role: { type: Sequelize.STRING, allowNull: false },
            createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
            updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW }
        });
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.dropTable("People");
    }
};
