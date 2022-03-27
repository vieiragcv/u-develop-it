const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'X9s0R0xpto#i7rzX8$*',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

module.exports = db;