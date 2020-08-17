const express = require('express');
const router = express.Router();
const db = require('../util/database');



router.post('/', (req, res, nex) => {
    console.log(req.body.type);
    const body = { type: req.body.type, cat: req.body.cat }
    db.execute("INSERT INTO `web_jobtype` ( `jobtype_name`, `jobtype_status`, `jobcat`) VALUES ( '" + body.type + "', '1', " + body.cat + ")",
        (error, rows, fildData) => {
            if (!error) {
                res.send({ mg: 'Ok', status: 1 });
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});

router.get('/:cat', (req, res, nex) => {
    req.params.cat;
    db.execute("SELECT web_jobtype.idWeb_jobtype,web_jobtype.jobtype_name FROM web_jobtype WHERE jobcat= " + req.params.cat,
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});

router.get('/', (req, res, nex) => {
    db.execute("SELECT idWeb_jobtype, jobtype_name, jobtype_status FROM `web_jobtype`",
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

router.delete('/:productId', (req, res, nex) => {

});


module.exports = router;
