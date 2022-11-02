const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "124.43.4.231",
    user:"root",
    password:"NATH@#$321$%",
    database:"online_test",
    port: 3306
   

});

module.exports = pool.promise();