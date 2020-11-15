const express = require('express');
const router = express.Router();
const db = require('../../util/database');
const con = require('../../util/conn');
const on_cus = con.import('../../../models/online_cus');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const http = require('http');
var nodemailer = require('nodemailer');
const htmls = require('./htmledit');
const mail = require('../../middleware/email');



router.post('/rate', (req, res, next) => {
    db.execute("SELECT online_bank_rate.rate FROM online_bank_rate WHERE online_bank_rate.`status`= 1 ", (er, ro, fi) => {
        if (!er) {
            res.send(ro);
        }
    });
});


router.post('/pay', (req, res, nex) => {
    const param = { cusid: req.body.cusid, appcat: req.body.appcat, app: req.body.app, amount: req.body.amount, des: req.body.des, o1: req.body.o1, o2: req.body.o2, total: req.body.fullPay, rate: req.body.onValue }
    const datetime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    db.execute("INSERT INTO `online_pay`( `oncus_id`, `appcat_id`, `app_id`, `date`, `amount`, `status`, `description`, `other`, `other2`, `total`,`rate`) " +
        " VALUES ('" + param.cusid + "','" + param.appcat + "', '" + param.app + "', '" + datetime + "', " + param.amount + ", 0, '" + param.des + "', '" + param.o1 + "', '" + param.o2 + "','" + param.total + "','" + param.rate + "')",
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
    console.log(req.body);
    db.execute(
        "UPDATE `online_pay` SET `status` = '1' WHERE	(`idOnPaid` = '" + req.body.onpayid + "');",
        (error, rows, fildData) => {
            if (!error) {
                console.log(rows);
                db.execute("SELECT online_pay.idOnPaid,online_pay.oncus_id,online_pay.appcat_id,online_pay.app_id,online_pay.date,online_pay.amount,online_pay.`status`,online_pay.description,online_pay.other,online_pay.other2,online_pay.oder,online_cus.idOnline,online_cus.fullname,online_cus.nic,online_cus.email,online_cus.mobile,assessment.idAssessment,ward.ward_name,street.street_name,assessment.assessment_no FROM online_pay INNER JOIN online_cus ON online_cus.idOnline=online_pay.oncus_id INNER JOIN assessment ON assessment.idAssessment=online_pay.app_id INNER JOIN ward ON assessment.Ward_idWard=ward.idWard INNER JOIN street ON street.Ward_idWard=ward.idWard AND assessment.Street_idStreet=street.idStreet WHERE online_pay.idOnPaid='" + req.body.onpayid + "'",
                    (er, ro, fi) => {
                        if (!er) {
                            let data = ro[0];

                            var content = htmls.re1 +
                                htmls.re2 + "<h1> Hi " + data.fullname + "<h1>" +
                                htmls.re3 + "<h3>Online Payment ID : " + data.idOnPaid + "</h3> " +
                                htmls.re4 + data.date +
                                htmls.re5 + data.ward_name + " - " + data.street_name + " - " + data.assessment_no +
                                htmls.re6 + "Rs. " + data.amount +
                                htmls.re7 + "Rs. " + data.amount +
                                htmls.re8;


                            var param = {
                                html: content,
                                to: data.email,
                                subject: 'Payment Recipt',
                                text: 'Text message',
                            };
                            mail.emailSend(param);

                        }
                        res.send(rows);
                    });

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