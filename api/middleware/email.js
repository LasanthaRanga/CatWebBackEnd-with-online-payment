var nodemailer = require('nodemailer');
const http = require('http');

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




exports.smsSend = (param) => {

    console.log("sms send call");

    console.log(param);

    let message = param.message;
    let val = "0000";
    let mobile = param.mob;
    let uname = 'SLWDSCSAPI';
    let pword = 'SLWDSCSAPI';

    // http.get("http://www.textit.biz/sendmsg/index.php?id=94767365725&password=1548&text=" + message + val + "&to=" + mobile + "&from=MC.Kurunegala"
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

  

    http.get(request, function (err, res, body) {
        if (err) {
            console.log("sending error ====>");
          //  console.log(err);
        } else {
            // console.log("Else");
          //  console.log(res);
            console.log("sent ====>");
        }

    }
    );
}