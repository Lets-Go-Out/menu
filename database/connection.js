const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "root",
  database: "mockdata"
});
connection.connect();

module.exports = connection;
