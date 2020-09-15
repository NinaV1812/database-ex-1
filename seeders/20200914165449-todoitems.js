"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("todoItems", [
      {
        task: "one task",
        todoListId: 1,
        important: true,
        deadline: "one dedline",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "two task",
        todoListId: 2,
        important: false,
        deadline: "two dedline",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "three task",
        todoListId: 3,
        important: true,
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
