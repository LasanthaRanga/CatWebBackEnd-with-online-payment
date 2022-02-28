const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '124.43.11.162',
  user: 'root',
  password: '3ta@kela#una@',
  database: 'narammala_online',
  port: 3307,
});

module.exports = pool.promise();
