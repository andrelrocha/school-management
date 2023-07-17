"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Classes", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            startDate: {
                type: Sequelize.DATEONLY
            },
            teacherId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "People",
                    key: "id",
                    where: { role: "teacher" }
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            }, 
            levelId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "Levels",
                    key: "id"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },     
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Classes");
    }
};