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



const allowedOrigins = [
    '*',
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:4200',
    'http://localhost:8080',
    'http://localhost:8100',   
    'https://kgmc.lk/',
    'http://kgmc.lk/'
  
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