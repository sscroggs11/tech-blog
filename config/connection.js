//import sequelize
const Sequelize = require('sequelize');

// for loading new variables
require('dotenv').config();
//create the connection to the database
const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: "localhost",
    dialect: "mysql",
    dialectOptions: {
        decimalNumbers: true,
    },
});


module.exports = sequelize;