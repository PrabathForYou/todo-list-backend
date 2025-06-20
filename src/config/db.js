let mysql = require('mysql');
require('dotenv').config();

const con = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME 
});

con.connect(function(err) {
    if (err) {
        throw err;
    }
  console.log("Connected!");
});