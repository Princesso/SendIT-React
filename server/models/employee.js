'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    name: DataTypes.STRING,
    job_description: DataTypes.TEXT,
    years_of_experience: DataTypes.INTEGER,
    isstillemployed: DataTypes.BOOLEAN
  }, {});
  employee.associate = function(models) {
    // associations can be defined here
  };
  return employee;
};