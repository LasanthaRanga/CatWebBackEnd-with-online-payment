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
const vehicleRoute = require('./api/routes/vehicleRouters');



const allowedOrigins = [  
  'capacitor://localhost',
  'ionic://localhost',
  'http://localhost',
  'http://localhost:4200',
  'http://192.168.8.103:4200',
  'http://localhost:8080',
  'http://localhost:8100',
  'http://kgmc.lk',
  'http://kgmc.lk:3001',
  'https://kgmc.lk',
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




app.use('/online/userlogin', userlogin);
app.use('/online/privilage', privilage);
app.use('/online/jobtypes', jobtypes);
app.use('/online/subjects', subjects);
app.use('/online/department', department);
app.use('/online/jobs', jobs);
app.use('/online/sendto', sendto);
app.use('/online/attach', attach)
app.use('/online/unique', unique);
app.use('/online/onlinecustomer', onlinecustomer);
app.use('/online/onlinecuspro', onlinecuspro);
app.use('/online/login', login);
app.use('/online/assess_data', assess_data);
app.use('/online/onpay', onpay);
app.use('/online/vehicle', vehicleRoute);



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