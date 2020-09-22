const express = require('express');
const router = express.Router();
const mail = require('../middleware/email');

const htmls = require('./htmledit');


var fs = require('fs');
var path = require('path');
var template = fs.readFileSync(path.join(__dirname + "/htmlfiles/onlinePayOne.html"), { encoding: 'utf-8' });

const db = require('../util/database');
const jwt = require('jsonwebtoken');

const con = require('../util/conn');
const on_cus = con.import('../../models/online_cus');

const Sequelize = require('sequelize');
const { hrtime } = require('process');
const Op = Sequelize.Op;


router.post('/', (req, res, next) => {

    try {

        var content = htmls.re1 +
            htmls.re2 + "<h1> Hi Jagath Athapaththu<h1>" +
            htmls.re3 + "<h3>Online Payment ID : 508</h3> " +
            htmls.re4 + "2020 08 25" +
            htmls.re5 + "ward 5 - Colombo road left - A520" +
            htmls.re6 + "Rs. 6350.00" +
            htmls.re7 + "Rs. 6350.00" +
            htmls.re8;


        var param = {
            html: content,
            to: 'jagathsun@gmail.com',
            subject: 'Payment Recipt',
            text: 'Text message',
        };
        mail.emailSend(param);
        res.send({ ok: "OK" });

    } catch (error) {
        console.log(error);
    }

});









module.exports = router;