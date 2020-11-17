const express = require('express');
const router = express.Router();
const db = require('../util/database');
const jwt = require('jsonwebtoken');



router.post('/keyval', (req, res, next) => {
    db.execute("SELECT fxkeyvalue.id,fxkeyvalue.`key`,fxkeyvalue.`value`,fxkeyvalue.commnet FROM fxkeyvalue WHERE fxkeyvalue.`key`='" + req.body.key + "'",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});


router.get('/getSubjectsByUid/:uid', (req, res, next) => {
    db.execute("SELECT user_has_subject.user_id, `subject`.idSubject, `subject`.subject_name, `subject`.subject_code FROM user_has_subject \
    INNER JOIN `subject` ON `subject`.idSubject = user_has_subject.subject_id WHERE user_id ="+ req.params.uid,
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});

router.get('/getDip/:uid', (req, res, nex) => {
    const uid = req.params.uid;
    db.execute("SELECT `user`.idUser, dipartment.idDipartment, dipartment.dip_name FROM `user` INNER JOIN user_has_dipartment ON user_has_dipartment.User_idUser = `user`.idUser INNER JOIN dipartment ON user_has_dipartment.Dipartment_idDipartment = dipartment.idDipartment WHERE `user`.idUser = " + uid,
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});

router.get('/:dipid/:subid', (req, res, next) => {
    let dipid = req.params.dipid;
    let subid = req.params.subid;
    db.execute("SELECT\n" +
        "\t`user`.user_full_name,\n" +
        "\t`user`.user_nic,\n" +
        "\t`user`.idUser,\n" +
        "\tuser_has_dipartment.Dipartment_idDipartment,\n" +
        "\tuser_has_subject.user_id,\n" +
        "\t`subject`.subject_name,\n" +
        "\t`subject`.idSubject,\n" +
        "\t`subject`.department_id\n" +
        "FROM\n" +
        "\tuser_has_dipartment\n" +
        "INNER JOIN `user` ON user_has_dipartment.User_idUser = `user`.idUser\n" +
        "LEFT JOIN user_has_subject ON `user`.idUser = user_has_subject.user_id\n" +
        "LEFT JOIN `subject` ON `subject`.idSubject = user_has_subject.subject_id\n" +
        "WHERE\n" +
        "`user`.user_status = 1 AND\n" +
        "user_has_dipartment.Dipartment_idDipartment = '" + dipid + "' AND\n" +
        "`subject`.idSubject = " + subid,
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});


router.get('/:dipid', (req, res, next) => {
    let dipid = req.params.dipid;
    db.execute("SELECT\n" +
        "\t`user`.user_full_name,\n" +
        "\t`user`.user_nic,\n" +
        "\t`user`.idUser,\n" +
        "\tuser_has_dipartment.Dipartment_idDipartment,\n" +
        "\tuser_has_subject.user_id,\n" +
        "\t`subject`.subject_name,\n" +
        "\t`subject`.idSubject,\n" +
        "\t`subject`.department_id\n" +
        "FROM\n" +
        "\tuser_has_dipartment\n" +
        "INNER JOIN `user` ON user_has_dipartment.User_idUser = `user`.idUser\n" +
        "LEFT JOIN user_has_subject ON `user`.idUser = user_has_subject.user_id\n" +
        "LEFT JOIN `subject` ON `subject`.idSubject = user_has_subject.subject_id\n" +
        "WHERE\n" +
        "\t`user`.user_status = 1\n" +
        "AND user_has_dipartment.Dipartment_idDipartment =" + dipid,
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});


router.get('users/', (req, res, next) => {
    let dipid = req.params.dipid;
    db.execute("SELECT\n" +
        "\t`user`.user_full_name,\n" +
        "\t`user`.user_nic,\n" +
        "\t`user`.idUser,\n" +
        "\tuser_has_dipartment.Dipartment_idDipartment,\n" +
        "\tuser_has_subject.user_id,\n" +
        "\t`subject`.subject_name,\n" +
        "\t`subject`.idSubject,\n" +
        "\t`subject`.department_id\n" +
        "FROM\n" +
        "\tuser_has_dipartment\n" +
        "INNER JOIN `user` ON user_has_dipartment.User_idUser = `user`.idUser\n" +
        "LEFT JOIN user_has_subject ON `user`.idUser = user_has_subject.user_id\n" +
        "LEFT JOIN `subject` ON `subject`.idSubject = user_has_subject.subject_id\n" +
        "WHERE\n" +
        "\t`user`.user_status = 1\n",

        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});






router.get('/', (req, res, next) => {
    db.execute("SELECT idUser, user_full_name, user_nic FROM `user` WHERE `user`.user_status = 1",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});


router.post('/jwt/', (req, res, nex) => {
    const user = { uname: req.body.uname, pword: req.body.pword }
    db.execute("SELECT idUser, user_full_name, user_nic, user_date, user_status, user_syn, user_question, user_answer, user_username, user_password, user_level, office_idOffice, user_name_sinhala, mobile_no FROM `user` WHERE  user_username = '" + user.uname + "' AND  user_password = '" + user.pword + "'",
        (error, rows, fildData) => {
            if (!error) {
                const token = jwt.sign({ email: '', uid: 2 }, process.env.JWT_KEY,
                    { expiresIn: "1h" });
                return res.status(200).json({
                    message: "Login Ok",
                    token: token
                });
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});

router.post('/', (req, res, nex) => {
    const user = { uname: req.body.uname, pword: req.body.pword }


    db.execute("SELECT idUser, user_full_name, user_nic, user_date, user_status, user_syn, user_question, user_answer, user_username, user_password, user_level, office_idOffice, user_name_sinhala, mobile_no FROM `user` WHERE  user_username = '" + user.uname + "' AND  user_password = '" + user.pword + "'",
        (error, rows, fildData) => {
            if (!error) {


                if (rows[0] != null) {
                    console.log(rows[0]);
                    console.log("System Users");
                    let data = { type: 1, data: rows }
                    res.status(200);
                    res.send(data);
                } else {
                    console.log("Online Users");
                    db.execute("SELECT online_cus.idOnline,online_cus.fullname,online_cus.nic,online_cus.email,online_cus.mobile,online_cus.pword,online_cus.`status`,online_cus.`code` \
                    FROM \
                    online_cus \
                    WHERE online_cus.`status`=1 \
                    AND online_cus.mobile='"+ user.uname + "' \
                    AND online_cus.pword='"+ user.pword + "'", (er, ro, fildData) => {
                        if (!er) {
                            console.log(ro[0]);
                            let dat = { type: 2, data: ro }
                            res.status(200);
                            res.send(dat);
                        } else {
                            console.log(er);
                        }
                    });
                }
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });

});


router.patch('/:productId', (req, res, nex) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'Updated Product',
        id: id
    });

});

router.delete('/:productId', (req, res, nex) => {

});


module.exports = router;
