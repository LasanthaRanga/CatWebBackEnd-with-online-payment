const express = require('express');
const db = require('../../util/database');
const con = require('../../util/conn');
const on_cus = con.import('../../../models/online_cus');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const mail = require('../../middleware/email');


exports.saveStreet = (req, res, nex) => {

    console.log(req.body);

    db.execute("select * from user",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.getStreet = (req, res, nex) => {
    db.execute("select * from user",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};