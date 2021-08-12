const express = require('express');
const router = express.Router();
const db = require('../util/database');
var dateFormat = require('dateformat');
var appRoot = require('app-root-path');

//file upload


// Test 
let path = '';

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        let date = dateFormat(new Date(), 'yyyyMMddHHmmss_', 'en-US', '+0530');
        // console.log(date + " ===================== ");
        path = date + file.originalname;
        // console.log(path + "  ++++++++++++++++++");
        cb(null, path);
    }
});
const upload = multer({ storage: storage });
//file upload =================




router.post('/', upload.single('attach'), (req, res, nex) => {
    console.log("awa");
    console.log(req.file);
    console.log(req.body.type);
    const body = { comment: req.body.comment, assignid: req.body.assignid }
    console.log(body);
    console.log(path);

    db.execute("INSERT INTO `job_ac`( `job_comment`, `job_attach`, `assign_id`) VALUES ('" + body.comment + "', '" + path + "', " + body.assignid + ")",
        (error, rows, fildData) => {
            if (!error) {
                console.log(path);
                res.send({ mg: 'Ok', status: 1 });
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
    // res.send({ ok: "Ela Ban OK" });
});

router.get('/img/:path', (req, res, nex) => {
    var path = req.params.path;
    console.log(appRoot);
    res.sendFile(appRoot + '/uploads/' + path);
});

router.get('/:id', (req, res, nex) => {
    var id = req.params.id;
    db.execute("SELECT job_ac.idJob_ac, job_ac.job_comment, job_ac.job_attach, job_ac.assign_id FROM job_ac WHERE assign_id =" + id,
        (error, rows, next) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});




module.exports = router;
