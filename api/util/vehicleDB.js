const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',

    password: 'root',
    database: 'vehicle'


    // password: 'CHI@#321#',
    // database: 'vehicle'


    // password: 'KULIUC@#321#',
    // database: 'vehicle'

});

module.exports = pool.promise();
