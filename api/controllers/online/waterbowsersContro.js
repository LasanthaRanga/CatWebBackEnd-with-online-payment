const express = require('express');
const db = require('../../util/database');
const con = require('../../util/conn');
const on_cus = con.import('../../../models/online_cus');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const mail = require('../../middleware/email');
const axios = require('axios');
const btoa = require('btoa');
const htmls = require('./htmleditContro');
var dateFormat = require('dateformat');

exports.savegdetails = (req, res, nex) => {
    console.log(req.body);
    var day = dateFormat(new Date(), "yyyy-mm-dd");
    db.execute("INSERT INTO `wb_online_details` ( `wb_type_id`, `wb_date`, `wb_location`, `wb_reason`, `wb_town_or_not`, `wb_distance_with_town`, `wb_time_diuration`, `wb_active_status`, `wb_pending_status`, `wb_cus_id`, `wb_start_date`, `wb_end_date` ) VALUES ( '" + req.body.wb_type_id + "', '" + day + "', '" + req.body.wb_location + "', '" + req.body.wb_reason + "', '"+req.body.wb_town_or_not+"', '" + req.body.wb_distance_with_town + "', '" + req.body.wb_time_diuration + "', '1', '1', '"+req.body.cusid+"', '"+req.body.wb_start_date+"', '"+req.body.wb_end_date+"' );",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.gettype = (req, res, nex) => {
    console.log(req.body);
    db.execute("SELECT * FROM `wb_type` WHERE wb_type.wb_active_status = '1'",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.getuserpending = (req, res, nex) => {
    console.log(req.body);
    db.execute("SELECT wb_online_details.wb_detail_id, wb_online_details.wb_type_id, DATE_FORMAT( wb_online_details.wb_date, '%Y %M %d ' ) AS wb_date, wb_online_details.wb_location, wb_online_details.wb_reason, wb_online_details.wb_town_or_not, wb_online_details.wb_distance_with_town, wb_online_details.wb_time_diuration, wb_online_details.wb_active_status, wb_online_details.wb_pending_status, wb_online_details.wb_cus_id, wb_type.wb_type_name FROM wb_online_details INNER JOIN wb_type ON wb_online_details.wb_type_id = wb_type.wb_type_id WHERE wb_online_details.wb_active_status = '1' AND wb_online_details.wb_pending_status = '1' AND wb_online_details.wb_cus_id = '"+req.body.cusid+"'",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.getallpending = (req, res, nex) => {
    console.log(req.body);
    db.execute("SELECT wb_online_details.wb_detail_id, wb_online_details.wb_type_id, wb_online_details.wb_date, wb_online_details.wb_location, wb_online_details.wb_reason, wb_online_details.wb_town_or_not, wb_online_details.wb_distance_with_town, wb_online_details.wb_time_diuration, wb_online_details.wb_active_status, wb_online_details.wb_pending_status, wb_online_details.wb_cus_id, wb_type.wb_type_name FROM wb_online_details INNER JOIN wb_type ON wb_online_details.wb_type_id = wb_type.wb_type_id WHERE wb_online_details.wb_active_status = '1' AND wb_online_details.wb_pending_status = '1'",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.moredetails_by_id = (req, res, nex) => {
    console.log(req.body);
    db.execute("SELECT wb_online_details.wb_detail_id, wb_online_details.wb_type_id, wb_online_details.wb_date, wb_online_details.wb_location, wb_online_details.wb_reason, wb_online_details.wb_town_or_not, wb_online_details.wb_distance_with_town, wb_online_details.wb_time_diuration, wb_online_details.wb_active_status, wb_online_details.wb_pending_status, wb_online_details.wb_cus_id, wb_type.wb_type_name, wb_online_details.wb_start_date, wb_online_details.wb_end_date FROM wb_online_details INNER JOIN wb_type ON wb_online_details.wb_type_id = wb_type.wb_type_id WHERE wb_online_details.wb_active_status = '1' AND wb_online_details.wb_pending_status = '1' AND wb_online_details.wb_cus_id = '"+req.body.cusid+"' AND wb_online_details.wb_detail_id = '"+req.body.id+"'",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.allappbyid = (req, res, nex) => {
    console.log(req.body);
    db.execute("SELECT wb_online_details.wb_detail_id, wb_online_details.wb_type_id, wb_online_details.wb_date, wb_online_details.wb_location, wb_online_details.wb_reason, wb_online_details.wb_town_or_not, wb_online_details.wb_distance_with_town, wb_online_details.wb_time_diuration, wb_online_details.wb_active_status, wb_online_details.wb_pending_status, wb_online_details.wb_cus_id, wb_type.wb_type_name, wb_online_details.wb_start_date, wb_online_details.wb_end_date FROM wb_online_details INNER JOIN wb_type ON wb_online_details.wb_type_id = wb_type.wb_type_id WHERE wb_online_details.wb_active_status = '1' AND wb_online_details.wb_pending_status = '1' AND wb_online_details.wb_detail_id = '"+req.body.id+"'",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.w_addpay = (req, res, nex) => {
    console.log(req.body);
    db.execute("UPDATE `wb_online_details` SET `wb_amount` = '"+req.body.amount+"', `wb_active_status` = '2' WHERE ( `wb_detail_id` = '"+req.body.detailid+"' );",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.savepaydetail = (req, res, nex) => {
    console.log(req.body);
    db.execute("INSERT INTO `online_application_pay` ( `onlin_pay_app_cat`, `online_pay_application_id`, `online_pay_amount`, `online_pay_active_status`, `date`,`description`,`cus_id` ) VALUES ( '"+req.body.onlin_pay_app_cat+"', '"+req.body.online_pay_application_id+"', '"+req.body.online_pay_amount+"', '1', '2021-03-17','water bowser Payment','"+req.body.cusid+"' );",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};