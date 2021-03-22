const express = require('express');
const db = require('../../util/database');
const con = require('../../util/conn');
const on_cus = con.import('../../../models/online_cus');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const mail = require('../../middleware/email');
var dateFormat = require('dateformat');

exports.savecomplain = (req, res, nex) => {


    var day = dateFormat(new Date(), "yyyy-mm-dd");
    console.log(req.body);
    var datetime = new Date();
    // db.execute("INSERT INTO `slight_complains` ( `slight_complain_road`, `slight_complain_post_no`, `slight_complain_desc`, `slight_complain_tell_no`, `slight_complain_status`, `slight_complain_date` ) VALUES ( '"+req.body.slight_complain_road+"', '"+req.body.slight_complain_post_no+"', '"+req.body.slight_complain_desc+"', '"+req.body.slight_complain_tell_no+"', '0', '2021-03-17' );",
    db.execute("INSERT INTO `online_complains` ( `online_complain_name`, `online_complain_tell_no`, `online_complains`, `online_complain_date`, `online_complain_status` ) VALUES ( '"+req.body.online_complain_name+"', '"+req.body.online_complain_tell_no+"', '"+req.body.online_complains+"', '"+day+"', '0' );",
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
    db.execute("SELECT online_complains.online_complain_name, online_complains.online_complain_tell_no, online_complains.online_complains, online_complains.online_complain_date, IF ( online_complains.online_complain_date = 0, 'Complete', 'Not Complete' ) AS statuss FROM `online_complains` WHERE online_complains.online_complain_status = '0'",
    (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};