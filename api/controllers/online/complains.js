const express = require('express');
const db = require('../../util/database');
const con = require('../../util/conn');
const on_cus = con.import('../../../models/online_cus');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const mail = require('../../middleware/email');
var dateFormat = require('dateformat');

exports.savecomplain = (req, res, nex) => {

//naveen
    var day = dateFormat(new Date(), "yyyy-mm-dd");
    console.log(req.body);
    var datetime = new Date();
    //db.execute("INSERT INTO `online_complains` ( `online_complain_name`, `online_complain_tell_no`, `online_complains`, `online_complain_date`, `online_complain_status` ) VALUES ( '"+req.body.online_complain_name+"', '"+req.body.online_complain_tell_no+"', '"+req.body.online_complains+"', '"+day+"', '0' );",
    db.execute("INSERT INTO `online_complains` ( `online_complains`, `online_complain_date`, `online_complain_status`, `online_cus_id` ) VALUES ( '"+req.body.online_complains+"', '"+day+"', '0', '"+req.body.online_cus_id+"' );",
    (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.allcomplain = (req, res, nex) => {

    console.log(req.body);
    var datetime = new Date();
    //db.execute("SELECT online_cus.fullname, online_cus.mobile, online_complains.online_complains, online_complains.online_complain_date, IF ( online_complains.online_complain_date = 0, 'Complete', 'Not Complete' ) AS statuss FROM online_complains INNER JOIN online_cus ON online_complains.online_cus_id = online_cus.idOnline WHERE online_complains.online_complain_status = '0'",
    db.execute("SELECT online_cus.fullname, online_cus.mobile, online_complains.online_complains, online_complains.online_complain_date, IF ( online_complains.online_complain_date = 0, 'Complete', 'Not Complete' ) AS statuss, online_complains.online_complain_id FROM online_complains INNER JOIN online_cus ON online_complains.online_cus_id = online_cus.idOnline WHERE online_complains.online_complain_status = '0'",
    (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.complain_by_user = (req, res, nex) => {

    console.log(req.body);
    var datetime = new Date();
    db.execute("SELECT online_cus.fullname, online_cus.mobile, online_complains.online_complains, online_complains.online_complain_date, IF ( online_complains.online_complain_date = 0, 'Complete', 'Not Complete' ) AS statuss, online_complains.online_complain_id FROM online_complains INNER JOIN online_cus ON online_complains.online_cus_id = online_cus.idOnline WHERE online_complains.online_complain_status = '0' AND online_complains.online_cus_id = '" + req.body.cus_id + "'",
    (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};