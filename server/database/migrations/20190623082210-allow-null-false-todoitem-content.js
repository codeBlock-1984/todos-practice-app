// 'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('TodoItems', 'content', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('TodoItems', 'content', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  }
};
