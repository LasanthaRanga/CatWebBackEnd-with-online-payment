const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '124.43.9.57',
    port: 3306,
    user: 'root',
    password: '@Mck_#321',
    database: 'vehicle'


    // password: 'CHI@#321#',
    // database: 'vehicle'


    // password: 'KULIUC@#321#',
    // database: 'vehicle'

});

module.exports = pool.promise();