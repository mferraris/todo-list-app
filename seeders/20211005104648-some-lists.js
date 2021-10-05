"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "groceries",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "errands",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "study",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
