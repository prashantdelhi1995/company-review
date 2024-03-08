const { Sequelize, DataTypes } = require('sequelize');

const sequelize=require("../util/database")
const Rating = sequelize.define('Rating', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pros: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cons: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
  });
  module.exports=Rating;