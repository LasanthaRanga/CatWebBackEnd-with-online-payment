var nodemailer = require('nodemailer');
const http = require('http');
const db = require('../util/database');
const axios = require('axios')


process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";



var transporter = nodemailer.createTransport({
    host: 'mail.cat2020.org',
    port: 2525,
    secure: false, // use SSL
    auth: {
        user: 'webportal@cat2020.org',
        pass: 'webportal@2020'
    }
});

const message = "Welcome to MCK : ";


exports.emailSend = (param) => {
    try {
        let mailOptions = '';
        if (param.html) {
            mailOptions = {
                from: 'webportal@cat2020.org',
                to: param.to,
                subject: param.subject,
                text: param.message,
                html: `${param.html}`
            }
        } else {
            mailOptions = {
                from: 'webportal@cat2020.org',
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


exports.mobitelSmsSend = (parm) => {

    let send = {
        username: "esmsusr_1scv",
        password: "sre2ag",
        from: "MC KUR",
        to: parm.to,
        text: parm.mg,
        mesageType: 1
    }

    axios.post('https://smeapps.mobitel.lk:8585/EnterpriseSMSV3/esmsproxyURL.php', send)
        .then(res => {
            console.log(`statusCode: ${res[0]}`)
            // console.log(res)  
        })
        .catch(error => {
            console.error(error)
        })
}





exports.smsSend = (param) => {
    var id = '';
    var pword = '';
    var link = '';

    db.execute('SELECT sms_getting_setting.sms_setting_id,sms_getting_setting.sms_gatway_id,sms_getting_setting.sms_gatway_pwd,sms_getting_setting.sms_gatway_link FROM sms_getting_setting', (er, ro, fd) => {
        if (!er) {
            id = ro[0].sms_gatway_id;
            pword = ro[0].sms_gatway_pwd;
            link = ro[0].sms_gatway_link;

            console.log("sms send call");

            console.log(param);

            let message = param.message;
            let mobile = param.mob;


            http.get("" + link + "id=" + id + "&password=" + pword + "&text=" + message + "&to=" + mobile + "&from=MC.Kurunegala"
                , function (err, res, body) {
                    if (err) {
                        console.log("eroor on");
                        console.log(err);
                    } else {
                        console.log("Else");
                        console.log(res);
                    }
                }
            );

        }
    });



}