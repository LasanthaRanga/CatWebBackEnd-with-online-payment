const express = require('express');
const router = express.Router();
const db = require('../util/database');
var dateFormat = require('dateformat');

router.get('/all/', (req, res, next) => {
    db.execute("SELECT `unique`.idUnique,`unique`.customer_id,`unique`.cus_nic,`unique`.cus_name,`unique`.appcat_id,`unique`.app_id,`unique`.mobile,`unique`.conferm_code,`unique`.rating,`unique`.start_at,`unique`.location,`unique`.old_uinque_id,`unique`.`status`,application_catagory.application_name FROM `unique` INNER JOIN application_catagory ON application_catagory.idApplication_Catagory=`unique`.appcat_id",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
})


router.get('/steps/:id', (req, res, next) => {
    let id = req.params.id;
    db.execute("SELECT steps.idSteps,steps.unique_id,steps.step_no,steps.step_name,steps.comemts,steps.image,steps.sms,steps.`status`,steps.dateandtime,steps.user_id,steps.user_name,steps.ucat_id,steps.user_cat FROM steps WHERE unique_id=" + id,
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
})


router.get('/appdata/:id', (req, res, next) => {
    let id = req.params.id;

    db.execute("SELECT `unique`.idUnique,`unique`.customer_id,`unique`.cus_nic,`unique`.cus_name,`unique`.appcat_id,`unique`.app_id,`unique`.mobile,`unique`.conferm_code,`unique`.rating,`unique`.start_at,`unique`.location,`unique`.old_uinque_id,`unique`.`status`,application_catagory.application_name FROM `unique` INNER JOIN application_catagory ON application_catagory.idApplication_Catagory=`unique`.appcat_id WHERE `unique`.idUnique=" + id,
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
})






router.post('/', (req, res, next) => {

    let b = {
        customer_id: req.body.customer_id,
        cus_nic: req.body.cus_nic,
        cus_name: req.body.cus_name,
        appcat_id: req.body.appcat_id,
        app_id: req.body.app_id,
        mobile: req.body.mobile,
        old_uinque_id: req.body.old_uinque_id,
        step_name: req.body.step_name,
        comemts: req.body.comemts,
        sms: req.body.sms,
        status: req.body.status,
        user_id: req.body.user_id,
        ucat_id: req.body.ucat_id
    }

    // console.log(b.user_id);

    var day = dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");


    console.log(day);
    console.log(b.app_id);
    console.log(b.appcat_id);
    let stepnumber = 0;
    let uniqid = 0;
    let uniqyeStatus = 1;
    if (b.status === 1000) {
        uniqyeStatus = 1000;
    }
    let uname = '';
    let approvecatName = '';

    db.execute("SELECT steps.unique_id,steps.step_no,steps.idSteps FROM `unique` INNER JOIN steps ON steps.unique_id=`unique`.idUnique WHERE `unique`.appcat_id=" + b.appcat_id + " AND `unique`.app_id=" + b.app_id + " ORDER BY steps.idSteps DESC LIMIT 1", (er1, ro1, fildData) => {
        if (!er1) {
            if (ro1[0] == null) {
                stepnumber = 1;
            } else {
                stepnumber = ro1[0].step_no + 1;
                uniqid = ro1[0].unique_id;

            }
            getUser();
        } else {
            console.log(er1);
        }
    });

    const getUser = () => {
        db.execute("SELECT idUser, user_full_name FROM `user` WHERE idUser = " + b.user_id,
            (error, rows, fildData) => {
                if (!error) {
                    if (rows[0] == null) {
                    } else {
                        uname = rows[0].user_full_name;
                    }
                    db.execute("SELECT idApproval_cat,approval_name FROM approval_cat WHERE idApproval_cat=" + b.ucat_id,
                        (error2, rows2, fildData2) => {
                            if (!error2) {
                                if (rows2[0] == null) {
                                    console.log("no Uset Cat")
                                } else {
                                    approvecatName = rows2[0].approval_name;
                                }
                                func();
                            } else {
                                console.log("error message");
                                console.log(error.message);
                            }
                        });
                } else {
                    console.log("error message");
                    console.log(error.message);
                }
            });
    }
    const func = () => {
        //==========================
        if (uniqid === 0) {// First Step
            db.execute("INSERT INTO `unique` ( `customer_id`, `cus_nic`, `cus_name`, `appcat_id`, `app_id`, `mobile`,  `start_at`, `location`,  `status` ) \
            VALUES	( "+ b.customer_id + ", '" + b.cus_nic + "', '" + b.cus_name + "', " + b.appcat_id + ", " + b.app_id + ", '" + b.mobile + "', '" + day + "', '" + day.location + "',  " + uniqyeStatus + " )",
                (erro, row, fild) => {
                    if (!erro) {
                        db.execute("SELECT idUnique FROM `unique` ORDER BY idUnique DESC LIMIT 1", (err, ro, fil) => {
                            if (!err) {
                                let iud = ro[0].idUnique;
                                db.execute("INSERT INTO `steps` ( `unique_id`, `step_no`, `step_name`, `comemts`,  `sms`, `status`, `dateandtime`, `user_id`, `user_name`, `ucat_id`, `user_cat` ) \
                                     VALUES ( "+ iud + ", " + stepnumber + ", '" + b.step_name + "', '" + b.comemts + "',  '" + b.sms + "', " + b.status + ", '" + day + "', " + b.user_id + ", '" + uname + "'," + b.ucat_id + ",'" + approvecatName + "' )", (er, rr, fi) => {
                                    if (!er) {
                                        res.status(200).send({ message: 'ok', unique_id: iud })
                                    } else {
                                        console.log("error");
                                    }
                                });
                            } else {
                                console.log("error");
                            }
                        });
                    } else {
                        console.log(er);
                    }
                });

        } else {
            db.execute("INSERT INTO `steps` ( `unique_id`, `step_no`, `step_name`, `comemts`,  `sms`, `status`, `dateandtime`, `user_id`, `user_name`, `ucat_id`, `user_cat` ) \
                        VALUES ( "+ uniqid + ", " + stepnumber + ", '" + b.step_name + "', '" + b.comemts + "',  '" + b.sms + "', " + b.status + ", '" + day + "', " + b.user_id + ", '" + uname + "'," + b.ucat_id + ",'" + approvecatName + "' );", (er, rr, fi) => {
                if (!er) {
                    res.status(200).send({ message: 'ok', unique_id: uniqid })
                } else {
                    console.log("error");
                }
            });
        }
        //=======================
    }
})


module.exports = router;