// 'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Todos',
      'title',
      {
        type: Sequelize.STRING,
        allowNull: false,
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Todos',
      'title',
      {
        type: Sequelize.STRING,
        allowNull: true,
      }
    );
  }
};
