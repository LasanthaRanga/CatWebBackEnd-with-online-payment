const express = require('express');
const db = require('../../util/database');
const con = require('../../util/conn');
const on_cus = con.import('../../../models/online_cus');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const mail = require('../../middleware/email');
const axios = require('axios');
const btoa = require('btoa');
const htmls = require('./htmleditContro');
var dateFormat = require('dateformat');

exports.savegdetails = (req, res, nex) => {
    console.log(req.body);
    var day = dateFormat(new Date(), "yyyy-mm-dd");
    db.execute("INSERT INTO `g_online_details` ( `g_mobile`, `g_address`, `g_nature_of_place`, `g_townarea_or_not`, `g_distance`, `g_facility_for_parking`, `g_distance_between_gully_tank`, `g_email`, `g_active_status`, `g_pending_status`, `g_date`, `g_cus_id` ) VALUES ( '" + req.body.mobile + "', '" + req.body.adress + "', '" + req.body.nature + "', '1', '" + req.body.distanceintown + "', '1', '" + req.body.distanceintank + "', '" + req.body.email + "', '1', '1', '" + day + "', '" + req.body.g_cus_id + "' );",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.getnatures = (req, res, nex) => {
    console.log(req.body);
    db.execute("SELECT g_nature.g_nature_id, g_nature.g_nature, g_nature.g_active_status FROM `g_nature`",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.getpendinglist = (req, res, nex) => {
    console.log(req.body);
    db.execute("SELECT DATE_FORMAT( g_online_details.g_date, '%Y %M %d ' ) AS g_date, g_online_details.g_address, g_nature.g_nature, g_online_details.g_detail_id FROM g_online_details INNER JOIN g_nature ON g_online_details.g_nature_of_place = g_nature.g_nature_id WHERE g_online_details.g_cus_id = '" + req.body.cusid + "' AND g_online_details.g_active_status = '1' AND g_online_details.g_pending_status = '1'",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.getallpendinglist = (req, res, nex) => {
    console.log(req.body);
    db.execute("SELECT DATE_FORMAT( g_online_details.g_date, '%Y %M %d ' ) AS g_date, g_online_details.g_address, g_nature.g_nature, g_online_details.g_detail_id FROM g_online_details INNER JOIN g_nature ON g_online_details.g_nature_of_place = g_nature.g_nature_id WHERE g_online_details.g_active_status = '1' AND g_online_details.g_pending_status = '1'",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.moreinfo = (req, res, nex) => {
    console.log(req.body);
    db.execute("SELECT g_nature.g_nature, g_status.`name`, g_online_details.g_detail_id, DATE_FORMAT( g_online_details.g_date, '%Y %M %d ' ) AS g_date, g_online_details.g_address, g_town_area.`status`, g_town_area.`name` AS tname, g_online_details.g_cus_id, g_online_details.g_distance FROM g_online_details INNER JOIN g_nature ON g_online_details.g_nature_of_place = g_nature.g_nature_id INNER JOIN g_status ON g_online_details.g_pending_status = g_status.`status` INNER JOIN g_town_area ON g_online_details.g_townarea_or_not = g_town_area.`status` WHERE g_online_details.g_active_status = '1' AND g_online_details.g_detail_id = '" + req.body.appid + "'",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.addamount = (req, res, nex) => {
    console.log(req.body);
    db.execute("UPDATE `g_online_details` SET `g_pending_status` = '2', `g_amount` = '" + req.body.amount + "' WHERE (`g_detail_id` = '" + req.body.g_detail_id + "');",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.addamount = (req, res, nex) => {
    console.log(req.body);
    db.execute("UPDATE `g_online_details` SET `g_pending_status` = '2', `g_amount` = '" + req.body.amount + "' WHERE (`g_detail_id` = '" + req.body.g_detail_id + "');",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.savepaydetail = (req, res, nex) => {
    console.log(req.body);
    db.execute("INSERT INTO `online_application_pay` ( `onlin_pay_app_cat`, `online_pay_application_id`, `online_pay_amount`, `online_pay_active_status`, `date`,`description`,`cus_id` ) VALUES ( '" + req.body.onlin_pay_app_cat + "', '" + req.body.online_pay_application_id + "', '" + req.body.online_pay_amount + "', '1', '2021-03-17','Gully Payment','" + req.body.cusid + "' );",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.getpaymentforcus = (req, res, nex) => {
    console.log(req.body);
    db.execute("SELECT online_application_pay.onlin_pay_details, online_application_pay.description, online_application_pay.cus_id, online_application_pay.online_pay_amount FROM `online_application_pay` WHERE online_application_pay.online_pay_active_status = '1' AND online_application_pay.cus_id = '" + req.body.cus_id + "'",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.getpayment_detail_by_id = (req, res, nex) => {
    console.log(req.body);
    db.execute("SELECT online_application_pay.onlin_pay_details, online_application_pay.description, online_application_pay.cus_id, online_application_pay.online_pay_amount, online_application_pay.online_pay_application_id, online_application_pay.onlin_pay_app_cat, application_catagory.sh_name FROM online_application_pay INNER JOIN application_catagory ON online_application_pay.onlin_pay_app_cat = application_catagory.idApplication_Catagory WHERE online_application_pay.online_pay_active_status = '1' AND online_application_pay.cus_id = '" + req.body.cus_id + "' AND online_application_pay.onlin_pay_details = '" + req.body.payid + "'",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.getbankrate = (req, res, nex) => {
    console.log(req.body);
    db.execute("SELECT online_bank_rate.rate FROM `online_bank_rate`",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.pay = (req, res, nex) => {
    console.log('========');
    console.log(req.body);
    console.log('========');
    const param = { cusid: req.body.cusid, appcat: req.body.appcat, app: req.body.app, amount: req.body.amount, des: req.body.des, o1: req.body.o1, o2: req.body.o2, total: req.body.fullPay, rate: req.body.onValue, catname: req.body.catname }
    console.log(param);
    const datetime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    db.execute("INSERT INTO `online_pay`( `oncus_id`, `appcat_id`, `app_id`, `date`, `amount`, `status`, `description`, `other`, `other2`, `total`,`rate`) " +
        " VALUES ('" + param.cusid + "','" + param.appcat + "', '" + param.app + "', '" + datetime + "', " + param.amount + ", 0, '" + param.des + "', '" + param.o1 + "', '" + param.o2 + "','" + param.total + "','" + param.rate + "')",
        (error, rows, fildData) => {
            if (!error) {
                console.log(rows);
                param.o1 = rows.insertId;
                this.boc(req, res, nex, param);
            } else {
                console.log("error message");
                console.log(error);
            }
        });
};

exports.boc = (req, res, nex, param) => {
    try {

        console.log(param);
        console.log(process.env.resultRedirect);
        console.log(process.env.bota_code);
        axios.post('https://bankofceylon.gateway.mastercard.com/api/rest/version/58/merchant/700193990120/session',
        // axios.post('https://test-bankofceylon.mtf.gateway.mastercard.com/api/rest/version/61/merchant/700193990120/session',
            {
                "apiOperation": "CREATE_CHECKOUT_SESSION",
                "interaction": {
                    "operation": "PURCHASE",
                    "returnUrl": process.env.resultRedirectOther
                },
                "order": {
                    "currency": "LKR",
                    "id": param.o1 + "_" + param.catname + "_" + param.app,
                    "amount": param.total,
                    "description": "Gully service - " + param.app + " cus - " + param.cusid + " id - " + param.o1
                }
            }, {
            headers: {
                'Authorization': 'Basic ' + btoa('merchant.700193990120:0317669b6b6bbacb6b46f2a6d598aad0')
            }
        }).then(boc => {
            console.log('-------------------------------');
            console.log(boc.data);
            param.o2 = boc.data;
            console.log(param);
            res.send(param);
            console.log('-------------------------------');
        }).catch(err => {
            console.log('********************');
            console.log(err)
            console.error(err.data)
            res.send({ error: err.data });
        })
    } catch (error) {
        console.log(error);
    }
};



exports.responce = (req, res, nex) => {
    console.log(req.body);
    db.execute(
        "UPDATE `online_pay` SET `status` = '1', ref = '" + req.body.orderID + "' WHERE	(`idOnPaid` = '" + req.body.onpayid + "');",
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

                            var parmsam = {
                                to: data.mobile,
                                mg: 'payment sucsess...!!!',
                            };

                            this.update_payment_status(data);
                            mail.emailSend(param);
                            mail.mobitelSmsSend(parmsam);
                        }
                        res.send(rows);
                    });

            } else {
                console.log("error message");
                console.log(error);
            }
        });
};


exports.update_payment_status = (data) => {
    let datas = data;
    console.log('app cat ', +datas.appcat_id);
    console.log('app id ', +datas.app_id);
    db.execute("UPDATE `online_application_pay` SET `online_pay_active_status` = '2' WHERE ( `onlin_pay_app_cat` = '" + datas.appcat_id + "' AND online_pay_application_id = '" + datas.app_id + "')",
        (error, rows, fildData) => {
            if (!error) {
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.cusdata = (data) => {
    let datas = data;
    db.execute("SELECT online_cus.fullname FROM `online_cus` WHERE online_cus.idOnline = '" + req.body.cusid + "'",
        (error, rows, fildData) => {
            if (!error) {
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};





