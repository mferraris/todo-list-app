"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Joe",
          email: "joseph@email.com",
          phone: 123456,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Miguel",
          email: "miguel@email.com",
          phone: 654321,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maria",
          email: "maria@email.com",
          phone: 321654,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
