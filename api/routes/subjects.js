const express = require('express');
const router = express.Router();
const db = require('../util/database');


router.get('/all', (req, res, nex) => {
    db.execute("SELECT user_has_subject.idUser_has_subject, user_has_subject.user_id, user_has_subject.subject_id, `user`.user_full_name, `user`.user_nic, `subject`.subject_name, `subject`.subject_code, dipartment.idDipartment, dipartment.dip_name FROM user_has_subject INNER JOIN `user` ON `user`.idUser = user_has_subject.user_id INNER JOIN `subject` ON `subject`.idSubject = user_has_subject.subject_id INNER JOIN dipartment ON dipartment.idDipartment = `subject`.department_id",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});


router.get('/byid/:subid', (req, res, nex) => {
    let query = "SELECT `subject`.idSubject, `subject`.subject_name, `subject`.subject_code, `subject`.subject_status, `subject`.department_id FROM `subject` WHERE `subject`.idSubject = " + req.params.subid;
    db.execute(query,
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        }
    );
});




router.post('/', (req, res, nex) => {
    console.log(req.body.type);
    const body = { name: req.body.name, code: req.body.code, dipid: req.body.dipid }
    db.execute("INSERT INTO `subject`( `subject_name`, `subject_code`, `subject_status`, `department_id`) VALUES ( '" + body.name + "', '" + body.code + "', 1, '" + body.dipid + "')",
        (error, rows, fildData) => {
            if (!error) {
                res.send({ mg: 'Ok', status: 1 });
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});

router.get('/', (req, res, nex) => {
    db.execute("SELECT dip_name, subject_name, subject_code, idSubject, idDipartment FROM subject INNER JOIN dipartment ON dipartment.idDipartment = subject.department_id",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});

router.get('/:dipId', (req, res, nex) => {
    let dipId = req.param('dipId');
    db.execute("SELECT idSubject,subject_name,subject_code,subject_status,department_id FROM `subject` WHERE department_id = '" + dipId + "' AND subject_status = 1",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
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

router.delete('/:uhsid', (req, res, nex) => {
    let uhsid = req.param('uhsid');
    db.execute("DELETE FROM user_has_subject WHERE idUser_has_subject = " + uhsid,
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});


router.post('/assignUsers', (req, res, nex) => {
    console.log(req.body);
    const body = {
        uid: req.body.uid,
        subid: req.body.subid,
    }
    db.execute("INSERT INTO user_has_subject ( `user_id`, `subject_id`, `uhs_status`) VALUES ( " + body.uid + ", " + body.subid + ", 1)",
        (error, rows, fildData) => {
            if (!error) {
                res.send({ mg: 'Ok', status: 1 });
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});




module.exports = router;
