const express = require('express');
const db = require('../../util/database');
const con = require('../../util/conn');
const on_cus = con.import('../../../models/online_cus');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const mail = require('../../middleware/email');
var dateFormat = require('dateformat');

exports.saveslcom = (req, res, nex) => {

    var day = dateFormat(new Date(), "yyyy-mm-dd");

    console.log(req.body);
    var datetime = new Date();
    db.execute("INSERT INTO `slight_complains` ( `slight_complain_road`, `slight_complain_post_no`, `slight_complain_desc`, `slight_complain_tell_no`, `slight_complain_status`, `slight_complain_date` ) VALUES ( '"+req.body.slight_complain_road+"', '"+req.body.slight_complain_post_no+"', '"+req.body.slight_complain_desc+"', '"+req.body.slight_complain_tell_no+"', '0', '"+day+"' );",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};