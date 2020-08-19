const express = require('express');
const router = express.Router();
const db = require('../../util/database');
const con = require('../../util/conn');
const on_cus = con.import('../../../models/online_cus');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const http = require('http');
var nodemailer = require('nodemailer');


router.post('/pay', (req, res, nex) => {
    const param = { cusid: req.body.cusid, appcat: req.body.appcat, app: req.body.app, amount: req.body.amount, des: req.body.des, o1: req.body.o1, o2: req.body.o2 }
    const datetime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    db.execute("INSERT INTO `online_pay`( `oncus_id`, `appcat_id`, `app_id`, `date`, `amount`, `status`, `description`, `other`, `other2`) " +
        " VALUES ('" + param.cusid + "','" + param.appcat + "', '" + param.app + "', '" + datetime + "', " + param.amount + ", 0, '" + param.des + "', '" + param.o1 + "', '" + param.o2 + "')",
        (error, rows, fildData) => {
            if (!error) {
                console.log(rows);
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error);
            }
        });
});

router.post('/responce', (req, res, nex) => {
    db.execute(
        "UPDATE `online_pay` SET `status` = '1' WHERE	(`idOnPaid` = '"+req.body.onpayid+"');",
        (error, rows, fildData) => {
            if (!error) {
                console.log(rows);
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error);
            }
        });
});

router.get('/get', (req, res, nex) => {
    console.log(req.body);
    console.log('---------------------');
    console.log(req.header);
    console.log('---------------------');
    res.send({ ok: "Ela Kiri" });
});

module.exports = router;