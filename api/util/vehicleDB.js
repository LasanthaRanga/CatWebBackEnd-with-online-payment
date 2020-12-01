const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '124.43.11.162',
    port: 3307,
    user: 'root',

    // password: 'root',
    // database: 'vehicle_chi'


    // password: 'CHI@#321#',
    // database: 'vehicle'


    password: '3ta@kela#una@',
    database: 'vehicle_test'

});

module.exports = pool.promise();
