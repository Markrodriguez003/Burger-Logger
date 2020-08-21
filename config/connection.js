const MYSQL = require("mysql"); //Loading in mysql 

let connection = MYSQL.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: '^!5PpS%Oyh@j2*',
  database: 'foodie_db',
  charset : 'utf8mb4'
});

// HEROKU

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


// DB CONNECTION
connection.connect((err) => {
  if (err) {
    console.error("ERROR::::: " + err);
    return;
  }
  console.log("Connected: " + connection.threadId);
});


module.exports = connection;