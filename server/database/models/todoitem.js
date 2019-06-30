// 'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  }, {});
  TodoItem.associate = function(models) {
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE',
    });
    // associations can be defined here
  };
  return TodoItem;
};
