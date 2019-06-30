// 'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('TodoItems', 'todoId', {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Todos',
        key: 'id',
        as: 'todoId',
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('TodoItems', 'todoId');
  }
};
