const mysql = require('mysql');
const { database } = require('./config/mysqlconfig.js');

const connection = mysql.createConnection(database);

connection.connect(function(error){
  if(error)
    throw error;
  else
    console.log("Conexión con MySQL.");
}
);

module.exports = connection;