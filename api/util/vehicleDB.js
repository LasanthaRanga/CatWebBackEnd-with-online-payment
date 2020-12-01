const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '124.43.9.57',
    user: 'root',

    // password: 'root',
    // database: 'vehicle_chi'


    // password: 'CHI@#321#',
    // database: 'vehicle'


    password: '@Mck_#321',
    database: 'vehicle_test'

});

module.exports = pool.promise();
