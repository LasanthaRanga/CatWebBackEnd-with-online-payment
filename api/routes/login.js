const express = require('express');
const router = express.Router();
const db = require('../util/database');
const jwt = require('jsonwebtoken');

const con = require('../util/con');
const on_cus = con.import('../../models/online_cus');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;


router.post('/', (req, res, next) => {


});









module.exports = router;