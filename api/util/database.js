const mysql = require('mysql2');

const pool = mysql.createPool({
    // host: process.env.host,
    // user: process.env.user,
    // password: process.env.password,
    // database: process.env.database

    host: 'localhost',
    port: 3306,
    user: 'root',

    password: 'root',
    database: 'atd'

    // password: 'CHI@#321#',
    // database: 'ultimate2'

    // password: 'KULIUC@#321#',
    // database: 'ibbagamuwaps'

});

module.exports = pool.promise();

