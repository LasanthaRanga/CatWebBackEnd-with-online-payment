const express = require('express');
const db = require('../../util/database');
const con = require('../../util/conn');
const on_cus = con.import('../../../models/online_cus');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const mail = require('../../middleware/email');




const message = "Registration Success in MC Kurunegala. Youre Verification code is : ";

exports.conferm = (req, res, nex) => {
    const cus = { mobile: req.body.mobile, code: req.body.code }
    on_cus.findAll({
        where: {
            [Op.and]: [{ mobile: cus.mobile }, { code: cus.code }]
        }
    }).then(result => {
        if (result.length != 0) {
            let id = result[0].idOnline;
            on_cus.update({ status: 1 }, { where: { idOnline: id } });
            res.status(200).send({ mg: "Verification Complete", status: "1" });
        } else {
            res.status(200).send({ mg: "Recheck Verification", status: "0" });
        }
    });
};


exports.newCus = (req, responce, nex) => {
    var cus = req.body;
    on_cus.findAll({
        where: {
            [Op.or]: [{ mobile: cus.mobile }, { email: cus.email }]
        }
    }).then(result => {

        if (result.length != 0) {
            console.log("Data ++++++++++++++++++++++++++");
            responce.status(200).send({ mg: "Email or Mobile Already Registered Plese Login", status: "0" });
        } else {


            var val = Math.floor(1000 + Math.random() * 9000);



            var param = {
                to: cus.email,
                subject: 'Verification Code',
                message: message + val,
                mob: cus.mobile,
            };
            mail.emailSend(param);

            // message.replace(" ", "+");
            var smsParam = {
                mg: message + val,
                to: cus.mobile,
            };
            mail.mobitelSmsSend(smsParam);



            let customer = {
                fullname: cus.fullname,
                email: cus.email,
                nic: cus.nic,
                mobile: cus.mobile,
                status: 0,
                pword: cus.pword,
                code: val
            }
            const online = on_cus.build(customer);

            online.save();

            responce.status(200).send({ mg: "Registration Success", status: 1, email: cus.email, mobile: cus.mobile });
        }
    });
};

exports.getDip = (req, res, nex) => {
    db.execute("SELECT idDipartment, dip_name, dip_head, dip_status, dip_syn FROM dipartment",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};