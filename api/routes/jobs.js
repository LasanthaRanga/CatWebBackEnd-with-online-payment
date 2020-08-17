const express = require('express');
const router = express.Router();
const db = require('../util/database');
const checkAuth = require('../middleware/check-auth');


router.get('/alljobs', (req, res, nex) => {
    let query = "SELECT job.idJob, job.job_number, job.job_name, job.job_type_id, job.job_description, job.job_instruction, job.job_dip_id, job.job_dedline, job.job_create_datetime, job.job_status, web_jobtype.jobtype_name FROM job INNER JOIN web_jobtype ON web_jobtype.idWeb_jobtype = job.job_type_id"
    db.execute(query,
        (error, rows, next) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});

router.get('/jobCreated/:id', (req, res, nex) => {

    let query = "SELECT job_assign.idJob_assign, job_assign.job_id, job_assign.user_id, job_assign.subject_id, job_assign.date_time, job_assign.status_id, job_assign.step, job_assign.step_name \
    FROM job_assign WHERE job_assign.job_id = "+ req.params.id + " AND job_assign.status_id = 1"

    db.execute(query,
        (error, rows, next) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});


router.get('/number', (req, res, nex) => {
    db.execute("SELECT max(idJob) as number from job",
        (error, rows, fildData) => {
            if (!error) {
                if (rows[0].number === null) {
                    res.send({ number: 1 })
                } else {
                    res.send({ number: rows[0].number + 1 })
                }
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});




//get Job by job ID
router.get('/job/:id', (req, res, nex) => {

    let query = "SELECT\n" +
        "job.idJob,\n" +
        "job.job_number,\n" +
        "job.job_name,\n" +
        "job.job_type_id,\n" +
        "job.job_description,\n" +
        "job.job_instruction,\n" +
        "job.job_dip_id,\n" +
        "job.job_dedline,\n" +
        "job.job_create_datetime,\n" +
        "job.job_status\n" +
        "FROM\n" +
        "job WHERE job.idJob = " + req.params.id;

    db.execute(query,
        (error, rows, next) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});





//get Jobs by dipartment and status
router.get('/jobs/:dipid', (req, res, nex) => {
    let query = "SELECT job.idJob, job.job_number, job.job_name, job.job_type_id, job.job_description, job.job_instruction, job.job_dip_id, job.job_dedline, job.job_create_datetime, job.job_status, web_jobtype.jobtype_name FROM job INNER JOIN web_jobtype ON web_jobtype.idWeb_jobtype = job.job_type_id WHERE job.job_dip_id =" + req.params.dipid;
    db.execute(query,
        (error, rows, next) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});

//get all Jobs 


//get Jobs by subjects
router.post('/jobsbysubjects', (req, res, nex) => {

    const ids = req.body.subids;

    let query = "SELECT job_assign.idJob_assign, job_assign.job_id, job_assign.user_id, job_assign.subject_id, job_assign.date_time, \
    job_assign.status_id, Max(job_assign.step) AS step, job_assign.step_name, job.idJob, job.job_number, job.job_name, \
    job.job_type_id, job.job_description, job.job_instruction, job.job_dip_id, job.job_dedline, job.job_create_datetime, \
    job.job_status, web_jobtype.jobtype_name, `subject`.idSubject, `subject`.subject_name, `subject`.subject_code, \
    job_status.jobstatus FROM job_assign \
    INNER JOIN job ON job.idJob = job_assign.job_id \
    INNER JOIN web_jobtype ON web_jobtype.idWeb_jobtype = job.job_type_id \
    INNER JOIN `subject` ON `subject`.idSubject = job_assign.subject_id \
    INNER JOIN job_status ON job_status.idJob_status = job_assign.status_id \
    WHERE `subject`.idSubject IN ("+ ids + ") \
    GROUP BY job_assign.job_id ORDER BY step DESC";

    console.log(query);

    db.execute(query,
        (error, rows, next) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});

//get Jobs by Subject
router.get('/jobsbysub/:subid', (req, res, nex) => {
    let query = "SELECT\n" +
        "job.idJob,\n" +
        "job.job_number,\n" +
        "job.job_name,\n" +
        "job.job_type_id,\n" +
        "job.job_description,\n" +
        "job.job_instruction,\n" +
        "job.job_dip_id,\n" +
        "job.job_dedline,\n" +
        "job.job_create_datetime,\n" +
        "job.job_status,\n" +
        "job_assign.idJob_assign,\n" +
        "job_assign.job_id,\n" +
        "job_assign.user_id,\n" +
        "job_assign.subject_id,\n" +
        "job_assign.date_time,\n" +
        "job_assign.status_id,\n" +
        "job_assign.step,\n" +
        "job_assign.step_name\n" +
        "FROM\n" +
        "job\n" +
        "INNER JOIN job_assign ON job_assign.job_id = job.idJob\n" +
        "WHERE\n" +
        "job_assign.subject_id = " + req.params.subid + "  " +
        "GROUP BY\n" +
        "job.idJob";
    db.execute(query,
        (error, rows, next) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});



router.post('/auth/', checkAuth, (req, res, next) => {
    console.log(req.body);
    res.send(req.body);
});


router.post('/', (req, res, nex) => {
    console.log(req.body.type);
    const body = {
        job_name: req.body.job_name,
        job_type_id: req.body.job_type_id,
        job_description: req.body.job_description,
        job_instruction: req.body.job_instruction,
        job_dip_id: req.body.job_dip_id,
        job_dedline: req.body.job_dedline,
        job_create_datetime: req.body.job_create_datetime,
        job_status: req.body.job_status,
        user_id: req.body.user_id,
        job_cat: req.body.job_cat,
        job_cat_name: req.body.job_cat_name,
        cus_name: req.body.cus_name,
        cus_email: req.body.cus_name,
        cus_mobile: req.body.cus_mobile
    }

    let query = ''
    if (body.job_dedline != '') {
        console.log("with Dadline");
        query = "INSERT INTO `job` (  `job_name`, `job_type_id`, `job_description`, `job_instruction`, `job_dip_id`, `job_dedline`, `job_create_datetime`, `job_status`, job_cat, job_cat_name, cus_name, cus_email, cus_mobile) VALUES (  '" + body.job_name + "', " + body.job_type_id + ", '" + body.job_description + "', '" + body.job_instruction + "', " + body.job_dip_id + ", '" + body.job_dedline + "', '" + body.job_create_datetime + "', " + body.job_status + "," + body.job_cat + ",'" + body.job_cat_name + "','" + body.cus_name + "','" + body.cus_email + "','" + body.cus_mobile + "')";
    } else {
        console.log("no Dadline");
        query = "INSERT INTO `job` (  `job_name`, `job_type_id`, `job_description`, `job_instruction`, `job_dip_id`,  `job_create_datetime`, `job_status`, job_cat, job_cat_name, cus_name, cus_email, cus_mobile) VALUES (  '" + body.job_name + "', " + body.job_type_id + ", '" + body.job_description + "', '" + body.job_instruction + "', " + body.job_dip_id + ",  '" + body.job_create_datetime + "', " + body.job_status + "," + body.job_cat + ",'" + body.job_cat_name + "','" + body.cus_name + "','" + body.cus_email + "','" + body.cus_mobile + "' )";
    }

    console.log(query);
    db.execute(query,
        (error, rows, fildData) => {
            if (!error) {
                let query1 = "SELECT Max(job.idJob) AS jobid FROM job WHERE job.job_create_datetime = '" + body.job_create_datetime + "'";
                db.execute(query1,
                    (error, rows, fildData) => {
                        if (!error) {
                            let jobid = rows[0].jobid;
                            console.log(jobid);
                            // ===========================
                            let query2 = "INSERT INTO `job_assign` (  `job_id`, `user_id`,  `date_time`, `status_id`, `step`, `step_name`) VALUES ( " + jobid + ", " + body.user_id + ", '" + body.job_create_datetime + "', 1, 1, 'Start Job')";
                            db.execute(query2, (error, rows, fildData) => {
                                if (!error) {
                                    let query4 = "SELECT Max(job_assign.idJob_assign) AS assignid FROM job_assign WHERE job_assign.date_time = '" + body.job_create_datetime + "'";
                                    db.execute(query4, (error, rows, fildData) => {
                                        if (!error) {
                                            res.send(rows);
                                        }
                                    });
                                } else {
                                    console.log("error message");
                                    console.log(error.message);
                                }
                            });
                            // ============================    
                        } else {
                            console.log("error message");
                            console.log(error.message);
                        }
                    });
                // ===============
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});




router.get('/assignid/:id', (req, res, nex) => {
    let id = req.params.id;
    db.execute("",
        (error, rows, fildData) => {
            if (!error) {
                if (rows[0].number === null) {
                    res.send({ number: 1 })
                } else {
                    res.send({ number: rows[0].number + 1 })
                }
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});

router.post('/assign', (req, res, next) => {
    //  console.log(req.body);
    let query = "INSERT INTO `job_assign` (\n" +
        "\t`job_id`,\n" +
        "\t`user_id`,\n" +
        "\t`subject_id`,\n" +
        "\t`date_time`,\n" +
        "\t`status_id`,\n" +
        "\t`step`,\n" +
        "\t`step_name`\n" +
        ")\n" +
        "VALUES\n" +
        "\t(\t\t\n" +
        "\t\t'" + req.body.job_id + "',\n" +
        "\t\t" + req.body.user_id + ",\n" +
        "\t\t" + req.body.subject_id + ",\n" +
        "\t\t'" + req.body.date_time + "',\n" +
        "\t\t" + req.body.status_id + ",\n" +
        "\t\t" + req.body.step + ",\n" +
        "\t\t'" + req.body.step_name + "'\n" +
        "\t)";

    db.execute(query, (error, rows, next) => {
        if (!error) {
            res.send({ ok: 'Ok Saved' });
            console.log(rows);
        } else {
            console.log(error);
        }
    })
});


module.exports = router;