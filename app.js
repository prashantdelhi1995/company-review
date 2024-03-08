const path = require('path');
const express= require("express");
const bodyParser=require("body-parser");
const routes=require("./routes/routes")
const { Sequelize, DataTypes } = require('sequelize');
const sequelize= require("./util/database")


const app=express();
var cors = require('cors')
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);









(async () => {
    try {
      await sequelize.sync();
      app.listen(3000, () => {
        console.log('Server is running on port 3000');
      });
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  })();
