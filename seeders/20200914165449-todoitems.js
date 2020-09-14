"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("todoItems", [
      {
        task: "one task",
        deadline: "one dedline",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "two task",
        deadline: "two dedline",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "three task",
        deadline: "three dedline",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
