const acess = require("../enviroments/enviroment")

const knex = require('knex')({
    client: acess.clientDatabase,
    connection: {
      host : acess.hostDatabase,
      user : acess.userDatabase,
      password : acess.passDatabase,
      database : acess.databaseName
    }
  });

module.exports = knex;