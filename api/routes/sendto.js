const express = require('express');
const router = express.Router();
const unique = require("../routes/unique");
const db = require('../util/database');

router.post('/', (req, res, nex) => {
    console.log(req.body.type);
    const body = { type: req.body.type }
    db.execute("",
        (error, rows, fildData) => {
            if (!error) {
                res.send({ mg: 'Ok', status: 1 });
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});

router.get('/assign/:id', (req, res, nex) => {
    const id = req.params.id;
    db.execute("SELECT job.idJob, job.job_number, job.job_name, job.job_type_id, job.job_description, job.job_instruction, job.job_dip_id, job.job_dedline, \
    job.job_create_datetime, job.job_status, job_assign.idJob_assign, web_jobtype.jobtype_name, web_jobtype.idWeb_jobtype, job_assign.step, job_assign.step_name, \
    job_assign.subject_id, job_assign.date_time, job_assign.status_id, job_assign.user_id FROM job_assign \
    INNER JOIN job ON job_assign.job_id = job.idJob INNER JOIN web_jobtype ON web_jobtype.idWeb_jobtype = job.job_type_id WHERE job_assign.idJob_assign = "+ id,
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});

router.get('/assignid/:subid/:jobid', (req, res, nex) => {
    console.log("Ela kiri");
    const subid = req.params.subid;
    const jobid = req.params.jobid;
    console.log(subid);
    console.log(jobid);

    db.execute("SELECT job_assign.idJob_assign,job_assign.job_id,job_assign.user_id,job_assign.subject_id,job_assign.date_time,job_assign.status_id,job_assign.step,job_assign.step_name FROM job_assign WHERE job_assign.job_id=" + jobid + " AND job_assign.subject_id=" + subid + " ORDER BY job_assign.idJob_assign DESC LIMIT 1", (error, rows, fildData) => {
        if (!error) {
            res.status(200);
            res.send(rows);
        } else {
            console.log(error.message);
        }
    });




});


router.get('/steps/:jobid', (req, res, next) => {

    const jobid = req.params.jobid;
    db.execute("SELECT\n" +
        "job_assign.idJob_assign,\n" +
        "job_assign.job_id,\n" +
        "job_assign.user_id,\n" +
        "job_assign.subject_id,\n" +
        "job_assign.date_time,\n" +
        "job_assign.status_id,\n" +
        "job_assign.step,\n" +
        "job_assign.step_name,\n" +
        "`user`.user_full_name,\n" +
        "`subject`.subject_name\n" +
        "FROM\n" +
        "job_assign\n" +
        "LEFT JOIN `user` ON `user`.idUser = job_assign.user_id\n" +
        "LEFT JOIN `subject` ON `subject`.idSubject = job_assign.subject_id\n" +
        "WHERE job_id = " + jobid,
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log(error.message);
            }
        });

});

router.get('/stepss/:jobid', (req, res, next) => {
    const jobid = req.params.jobid;
    let arr = [];
    let sub = [];
    db.execute("SELECT\n" +
        "job_assign.idJob_assign,\n" +
        "job_assign.job_id,\n" +
        "job_assign.user_id,\n" +
        "job_assign.subject_id,\n" +
        "job_assign.date_time,\n" +
        "job_assign.status_id,\n" +
        "job_assign.step,\n" +
        "job_assign.step_name,\n" +
        "`user`.user_full_name,\n" +
        "`subject`.subject_name\n" +
        "FROM\n" +
        "job_assign\n" +
        "LEFT JOIN `user` ON `user`.idUser = job_assign.user_id\n" +
        "LEFT JOIN `subject` ON `subject`.idSubject = job_assign.subject_id\n" +
        "WHERE job_id = " + jobid,

        (error, rows, fildData) => {
            if (!error) {
                rows.forEach(element => {

                    sb = { id: 1, attach: 'path' }
                    sub.push(sb);
                    body = {
                        idJob_assign: element.idJob_assign,
                        job_id: element.job_id,
                        user_id: element.user_id,
                        subject_id: element.subject_id,
                        date_time: element.date_time,
                        status_id: element.status_id,
                        step: element.step,
                        step_name: element.step_name,
                        user_full_name: element.user_full_name,
                        subject_name: element.subject_name,
                        array: sub,
                    }

                    arr.push(body);
                    console.log(arr);

                });
                res.send(arr);
            } else {
                console.log(error.message);
            }
        }
    );

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
