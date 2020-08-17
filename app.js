const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./api/util/database');
const jwt = require('jsonwebtoken');

const userlogin = require('./api/routes/userlogin');
const privilage = require('./api/routes/privilage');
const jobtypes = require('./api/routes/jobtypes');
const subjects = require('./api/routes/subjects');
const department = require('./api/routes/department');
const jobs = require('./api/routes/jobs');
const sendto = require('./api/routes/sendto');
const attach = require('./api/routes/attach');
const unique = require('./api/routes/unique');
const login = require('./api/routes/login');
const assess_data = require('./api/routes/assess_data');
const onlinecuspro = require('./api/routes/online/map');
const onpay = require('./api/routes/online/pay');
const onlinecustomer = require('./api/routes/online/customer');








app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, Authrization"
//     );
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }
//     next();
// })

// app.use(function(req, res, next) {
//     res.header({
//         "Content-Type": "application/x-www-form-urlencoded; charset=utf-8", 
//         'Accept': 'application/json, text/plain',
//         "cache-control": "no-cache", 
//         "Access-Control-Allow-Origin": "*", 
//         "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With, Access-Control-Request-Method, Access-Control-Request-Headers",
//         "Access-Control-Allow-Credentials" : "true",
//         "Access-Control-Allow-Methods" : "GET, POST, DELETE, PUT, OPTIONS, TRACE, PATCH, CONNECT",  
//         });
//     next();
//   });

app.use('/userlogin', userlogin);
app.use('/privilage', privilage);
app.use('/jobtypes', jobtypes);
app.use('/subjects', subjects);
app.use('/department', department);
app.use('/jobs', jobs);
app.use('/sendto', sendto);
app.use('/attach', attach)
app.use('/unique', unique);
app.use('/onlinecustomer', onlinecustomer);
app.use('/onlinecuspro', onlinecuspro);
app.use('/login', login);
app.use('/assess_data', assess_data);
app.use('/onpay', onpay);




app.use((req, res, next) => {
    const error = new Error('Not Found ela kiri');
    error.status = 404;
    console.log(error.message);
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;