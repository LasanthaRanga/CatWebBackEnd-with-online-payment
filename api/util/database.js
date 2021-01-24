const mysql = require('mysql2');

const pool = mysql.createPool({
    // host: process.env.host,
    // user: process.env.user,
    // password: process.env.password,
    // database: process.env.database

    // host: '124.43.23.214',
    host: '124.43.9.57',
    port: 3306,
    user: 'root',
    password: '@Mck_#321',
    database: 'atd2'

    // password: 'CHI@#321#',
    // database: 'ultimate2'

    // password: 'KULIUC@#321#',
    // database: 'ibbagamuwaps'

});

module.exports = pool.promise();