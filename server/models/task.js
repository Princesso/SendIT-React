'use strict';
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('task', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    priority: DataTypes.INTEGER,
    iscompleted: DataTypes.BOOLEAN
  }, {});
  task.associate = function(models) {
    // associations can be defined here
  };
  return task;
};