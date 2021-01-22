const express = require('express');
const router = express.Router();
const http = require('http');
var nodemailer = require('nodemailer');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";



var transporter = nodemailer.createTransport({
    host: 'mail.kgmc.lk',
    port: 26,
    secure: false, // use SSL
    auth: {
        user: 'info@kgmc.lk',
        pass: '!d%Th,Xoc4+4'
    }
});

const message = "Welcome to MCK : ";


exports.emailSend = (param) => {
    try {
        let mailOptions = '';
        if (param.html) {
            mailOptions = {
                from: 'info@kgmc.lk',
                to: param.to,
                subject: param.subject,
                text: param.message,
                html: `${param.html}`
            }
        } else {
            mailOptions = {
                from: 'info@kgmc.lk',
                to: param.to,
                subject: param.subject,
                text: param.message
            }
        }



        // console.log(param);
        transporter.sendMail(
            mailOptions
            , function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            }
        );

        message.replace(" ", "+");
    } catch (error) {
        console.log(error);
    }


}

