const mysql = require('mysql2');

const pool = mysql.createPool({
    port: 3306,
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,

    // host: '124.43.23.214',
    // host: '124.43.11.162',

    // user: 'root',
    // password: '3ta@kela#una@',
    // database: 'kalpitiyaps',

    // password: 'CHI@#321#',
    // database: 'ultimate2'

    // password: 'KULIUC@#321#',
    // database: 'ibbagamuwaps'

});

module.exports = pool.promise();