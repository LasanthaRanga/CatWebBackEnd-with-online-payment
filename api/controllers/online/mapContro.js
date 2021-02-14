const express = require('express');
const router = express.Router();
const db = require('../../util/database');
const con = require('../../util/conn');
const on_cus = con.import('../../../models/online_cus');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const http = require('http');
var nodemailer = require('nodemailer');


exports.map = (req, res, nex) => {
    console.log(req.body);
    const cus = { owner: req.body.owner, kform: req.body.kform, recit: req.body.recit, idoncus: req.body.idoncus, des: req.body.des, astno: req.body.astno, street: req.body.street }
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    db.execute("INSERT INTO `online_cusprop` ( `idOnCus`, `appCat`, `aplayDate`, `status`, `propid`, `recitid`, `description`, `owner_name`, other1, other2 )  VALUES	( '" + cus.idoncus + "', 2, '" + date + "', 0,  '" + cus.kform + "', '" + cus.recit + "', '" + cus.des + "', '" + cus.owner + "', '" + cus.astno + "', '" + cus.street + "' )",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error);
            }
        });
};

exports.prop = (req, res, nex) => {
    const cus = { idoncus: req.body.idoncus }
    db.execute("SELECT application_catagory.application_name, online_cusprop.owner_name, online_cusprop.`status`, online_cusprop.propid, online_cusprop.appCat FROM online_cusprop INNER JOIN application_catagory ON application_catagory.idApplication_Catagory = online_cusprop.appCat WHERE online_cusprop.idOnCus =" + cus.idoncus,
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error);
            }
        });
};


exports.allprop = (req, res, nex) => {
    const filter = { catid: req.body.catid, status: req.body.status }
    db.execute("SELECT online_cusprop.idOnCusProp, online_cusprop.idOnCus, online_cus.fullname, online_cus.nic, online_cus.email, online_cus.mobile, online_cusprop.appCat, application_catagory.application_name, online_cusprop.aplayDate, online_cusprop.`status`, online_cusprop.description, online_cusprop.owner_name, online_cusprop.recitid, online_cusprop.propid FROM online_cusprop INNER JOIN online_cus ON online_cus.idOnline = online_cusprop.idOnCus INNER JOIN application_catagory ON application_catagory.idApplication_Catagory = online_cusprop.appCat " +
        "WHERE online_cusprop.appCat = '" + filter.catid + "' AND online_cusprop.`status` = '" + filter.status + "'",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error);
            }
        });
};


exports.selectedMap = (req, res, nex) => {
    const mapid = { mapid: req.body.mapid }
    db.execute(" SELECT online_cusprop.idOnCus,online_cus.idOnline,online_cus.fullname,online_cus.nic,online_cus.email,online_cus.mobile,online_cusprop.idOnCusProp," +
        " online_cusprop.appCat,online_cusprop.aplayDate,application_catagory.application_name,online_cusprop.`status`,online_cusprop.userid,online_cusprop.approvDate, " +
        " online_cusprop.propid,online_cusprop.recitid,online_cusprop.description,online_cusprop.owner_name,online_cusprop.other1,online_cusprop.other2 " +
        " FROM online_cusprop INNER JOIN online_cus ON online_cus.idOnline=online_cusprop.idOnCus INNER JOIN application_catagory ON " +
        " application_catagory.idApplication_Catagory=online_cusprop.appCat WHERE online_cusprop.idOnCusProp= " + mapid.mapid,
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error);
            }
        });
};

exports.approve = (req, res, next) => {
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const para = { status: req.body.status, uid: req.body.uid, propid: req.body.propid, des: req.body.des, id: req.body.id }
    db.execute("UPDATE `online_cusprop` SET `status`=" + para.status + ",`userid`=" + para.uid + ",`approvDate`='" + date + "',`propid`='" + para.propid + "',`description`='" + para.des + "' WHERE `idOnCusProp`='" + para.id + "'", (error, rows, fildData) => {
        if (!error) {
            res.send(rows);
        }
    });
};