const db = require('../../util/database');
const htmls = require('./htmleditContro');
const mail = require('../../middleware/email');
const axios = require('axios');
const btoa = require('btoa');

exports.rate = (req, res, next) => {
    db.execute("SELECT online_bank_rate.rate FROM online_bank_rate WHERE online_bank_rate.`status`= 1 ", (er, ro, fi) => {
        if (!er) {
            res.send(ro);
        }
    });
};

exports.disabled = (req, res, next) => {
    db.execute("SELECT online_disable.block_dateTime,online_disable.reson FROM online_disable WHERE online_disable.`status`=0 AND online_disable.app_cat= " + req.body.cat + "", (er, ro, fi) => {
        if (!er) {
            res.send(ro);
        }
    });
};

exports.pay = (req, res, nex) => {

    const param = { cusid: req.body.cusid, appcat: req.body.appcat, app: req.body.app, amount: req.body.amount, des: req.body.des, o1: req.body.o1, o2: req.body.o2, total: req.body.fullPay, rate: req.body.onValue }

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

        let oder = {
            "apiOperation": "CREATE_CHECKOUT_SESSION",
            "interaction": {
                "operation": "PURCHASE",
                "returnUrl": process.env.resultRedirect
            },
            "order": {
                "currency": "LKR",
                "id": param.o1 + "_AT_" + param.app,
                "amount": param.total,
                "description": "A.Tax" + param.app + " C " + param.cusid + " ID " + param.o1
            },
            "billing": {
                "address": {
                    "city": "Ibbagamuwa",
                    "postcodeZip": "60500",
                    "stateProvince": "North West",
                    "country": "LKA",
                    "street": "A.T.No. " + param.app,
                    "street2": "Ibbagamuwa"
                }
            }
        }
        console.log("-----------------------");
        console.log(oder);
        console.log("-----------------------");
        // axios.post('https://bankofceylon.gateway.mastercard.com/api/rest/version/58/merchant/700193990133/session', oder, {
            axios.post('https://test-bankofceylon.mtf.gateway.mastercard.com/api/rest/version/61/merchant/700193990143/session', oder, {
            headers: {
                'Authorization': 'Basic ' + btoa('merchant.700193990143:08b94b0b4bd3d84adfe91cbbdaa24bf9')
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
                                htmls.re2 + process.env.rootPath + htmls.re22 + process.env.SabaName + htmls.re222 + "<h1> Hi " + data.fullname + "<h1>" +
                                htmls.re3 + "<h3>Online Payment ID : " + data.idOnPaid + "</h3> " +
                                htmls.re4 + data.date +
                                htmls.re5 + data.ward_name + " - " + data.street_name + " - " + data.assessment_no +
                                htmls.re6 + "Rs. " + data.amount +
                                htmls.re7 + "Rs. " + data.amount +
                                htmls.re8 + "  " + process.env.contact +
                                htmls.re9 + process.env.SabaName +
                                htmls.re10;


                            var param = {
                                html: content,
                                to: data.email,
                                subject: 'Payment Receipt',
                                text: 'Text message',
                            };

                            mail.emailSend(param);
                            mail.mobitelSmsSend({ to: data.mobile, mg: 'Payment Success LKR. ' + data.amount });

                        }
                        res.send(rows);
                    });

            } else {
                console.log("error message");
                console.log(error);
            }
        });
};