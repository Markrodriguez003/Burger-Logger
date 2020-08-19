const MYSQL = require("mysql"); //Loading in mysql 

let connection = MYSQL.createConnection({
  //     host: 'localhost',
  //     user: 'me',
  //     password: 'secret',
  //     database: 'my_db'
  //   });

  // if (process.env.JAWSDB_URL) {
  //   connection = MYSQL.createConnection(process.env.JAWSDB_URL)
  // }
  // else {
  //   connection = MYSQL.createConnection({
  //     host: 'localhost',
  //     user: 'me',
  //     password: 'secret',
  //     database: 'my_db'
  //   });
  // };

  // connection.connect(function (err) {
  //   if (err) {
  //     console.error("error connecting: " + err);
  //     return;
  //   }
  //   console.log("connected as id " + connection.threadId);
  // });


  module.exports = connection;