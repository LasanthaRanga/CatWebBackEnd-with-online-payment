const mysql = require('mysql2');

const pool = mysql.createPool({
    // host: 'localhost',
    // user: 'root',
    // password: 'root',
    // database: 'vehicle'

    host: 'localhost',
    user: 'root',
    password: '@Mck_#321',
    database: 'vehicle_test'
    
});

module.exports = pool.promise();
