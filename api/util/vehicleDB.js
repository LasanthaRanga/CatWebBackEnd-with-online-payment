const mysql = require('mysql2');

const pool = mysql.createPool({
    port: 3307,
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    // database: process.env.database,


    // host: '124.43.11.162',
    // user: 'root',
    // password: '3ta@kela#una@',
    // database: 'kalpitiyaps_vehicle'


    // password: 'CHI@#321#',
    database: 'vehicle'


    // password: 'KULIUC@#321#',
    // database: 'vehicle'

});

module.exports = pool.promise();