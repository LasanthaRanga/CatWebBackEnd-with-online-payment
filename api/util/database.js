const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "124.43.5.82",
    user:"root",
    password:"IBB@#$321$%",
    database:"online_test",
    port: 3306
   

});

module.exports = pool.promise();