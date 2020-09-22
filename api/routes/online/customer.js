const express = require('express');
const router = express.Router();
const db = require('../../util/database');
const con = require('../../util/conn');
const on_cus = con.import('../../../models/online_cus');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const http = require('http');
var nodemailer = require('nodemailer');
const mail = require('../../middleware/email');


// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false, // use SSL
//     auth: {
//         user: '88lasantha@gmail.com',
//         pass: 'Lasa2012g'
//     }
// });

const message = "Registration Success in MC Kurunegala. Youre Verification code is : ";


router.post('/conferm', (req, res, nex) => {
    const cus = { mobile: req.body.mobile, code: req.body.code }

    on_cus.findAll({
        where: {
            [Op.and]: [{ mobile: cus.mobile }, { code: cus.code }]
        }
    }).then(result => {
        if (result.length != 0) {
            let id = result[0].idOnline;
            on_cus.update(
                { status: 1 },
                { where: { idOnline: id } }
            );
            res.status(200).send({ mg: "Verification Complete", status: "1" });
        } else {
            res.status(200).send({ mg: "Recheck Verification", status: "0" });
        }
    });


});


router.post('/', (req, responce, nex) => {
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

            // transporter.sendMail(
            //     {
            //         from: '88lasantha@gmail.com',
            //         to: cus.email,
            //         subject: 'MC Kurunegala',
            //         text: message + val
            //     }
            //     , function (error, info) {
            //         if (error) {
            //             console.log(error);
            //         } else {
            //             console.log('Email sent: ' + info.response);
            //         }
            //     }
            // );

            var param = {                
                to: cus.email,
                subject: 'Verification Code',
                message: message + val,
            };
            mail.emailSend(param);
         

            message.replace(" ", "+");

            // http.get("http://www.textit.biz/sendmsg/index.php?id=94767365725&password=1548&text=" + message + val + "&to=" + cus.mobile + "&from=MC.Kurunegala"
            //     , function (err, res, body) {
            //         if (err) {
            //             console.log("eroor on");
            //             console.log(err);
            //         } else {
            //             console.log("Else");
            //             console.log(res);
            //         }
            //     }
            // );

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
});

router.get('/', (req, res, nex) => {
    db.execute("SELECT idDipartment, dip_name, dip_head, dip_status, dip_syn FROM dipartment",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});










module.exports = router;