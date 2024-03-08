const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('nodecomplete', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
  });
module.exports=sequelize;