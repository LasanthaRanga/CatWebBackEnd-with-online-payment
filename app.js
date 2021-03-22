const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./api/util/database');
const jwt = require('jsonwebtoken');
const message = require('./api/middleware/email');
const btoa = require('btoa');
const axios = require('axios');
const fs = require('fs');

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
const vehicleRoute = require('./api/routes/vehicleRouters');
const adminRoute = require('./api/routes/admin_panel/mixBillRouters');
const streetRoute = require('./api/routes/online/street');

// Testing Comment


const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:4200',
    'http://192.168.8.103:4200',
    'http://localhost:8080',
    'http://localhost:8100',
    'http://localhost:81',
    'http://chilawuc.cat2020.org',
    'https://chilawuc.cat2020.org',
    'http://kurunegalamc.cat2020.org',
    'https://kurunegalamc.cat2020.org',
    '*',
];

// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Origin not allowed by CORS'));
        }
    }
}

// Enable preflight requests for all routes
app.options('*', cors(corsOptions));



app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const urlPrifix = '/online/';


app.use(urlPrifix + 'userlogin', userlogin);
app.use(urlPrifix + 'privilage', privilage);
app.use(urlPrifix + 'jobtypes', jobtypes);
app.use(urlPrifix + 'subjects', subjects);
app.use(urlPrifix + 'department', department);
app.use(urlPrifix + 'jobs', jobs);
app.use(urlPrifix + 'sendto', sendto);
app.use(urlPrifix + 'attach', attach)
app.use(urlPrifix + 'unique', unique);
app.use(urlPrifix + 'onlinecustomer', onlinecustomer);
app.use(urlPrifix + 'onlinecuspro', onlinecuspro);
app.use(urlPrifix + 'login', login);
app.use(urlPrifix + 'assess_data', assess_data);
app.use(urlPrifix + 'onpay', onpay);
app.use(urlPrifix + 'vehicle', vehicleRoute);
app.use(urlPrifix + 'admin', adminRoute);
app.use(urlPrifix + 'street', streetRoute);


// app.use('/sms', (req, res, next) => {
//   message.mobitelSmsSend({ to: '0702517628', mg: 'test parameeter' });
//   res.send({ ok: 'ok' });
// });




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