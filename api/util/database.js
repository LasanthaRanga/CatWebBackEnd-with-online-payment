const mysql = require('mysql2');

const pool = mysql.createPool({
    // host: process.env.host,
    // user: process.env.user,
    // password: process.env.password,
    // database: process.env.database

    host: 'localhost',
    user: 'root',

    // password: 'root',
    // database: 'atd'

    password: 'CHI@#321#',
    database: 'ultimate2'

    // password: '@Mck_#321',
    // database: 'atd'

});

module.exports = pool.promise();

