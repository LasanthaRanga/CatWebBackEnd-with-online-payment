const mysql = require('mysql2');

const pool = mysql.createPool({
    // host: process.env.host,
    // user: process.env.user,
    // password: process.env.password,
    // database: process.env.database

    host: '124.43.11.162',
    port: 3307,
    user: 'root',

    // password: 'root',
    // database: 'atd'

    // password: 'CHI@#321#',
    // database: 'ultimate2'

    password: '3ta@kela#una@',
    database: 'ibbagamuwaps'

});

module.exports = pool.promise();

