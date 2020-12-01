const mysql = require('mysql2');

const pool = mysql.createPool({
    // host: process.env.host,
    // user: process.env.user,
    // password: process.env.password,
    // database: process.env.database

    host: '124.43.9.57',
    user: 'root',

    // password: 'root',
    // database: 'atd'

    // password: 'CHI@#321#',
    // database: 'ultimate2'

    password: '@Mck_#321',
    database: 'atd2'

});

module.exports = pool.promise();

