const express = require('express');
const db = require('../../util/database');
const con = require('../../util/conn');
const on_cus = con.import('../../../models/online_cus');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const mail = require('../../middleware/email');
var dateFormat = require('dateformat');

exports.saveStreet = (req, res, nex) => {
console.log('elaaaaa');
    console.log(req.body);
    console.log('elaaaaa-------------');

    var day = dateFormat(new Date(), "yyyy-mm-dd");

    console.log(day);
    var day2 = dateFormat(req.body.slServayDate, "yyyy-mm-dd");
    console.log(day2);
    var day3 = dateFormat(req.body.slNotaryDate, "yyyy-mm-dd");
    

    db.execute("INSERT INTO `sl_details` ( `idStreetLine`, `application_categ`, `ass_id`, `slDate`, `slPlanNo`, `slDescription`, `slServayOfficer`, `slServayDate`, `slStatus`, `office_idOffice`, `customer_idCustomer`, `ward_id`, `sl_reference_no`, `slLandName`, `slNotatyOfficer`, `slNotaryDate`, `slDeedNo`, `slApplicantName`, `slGnId`, `slPurpose`, `slBnkorPlce`, `slPlceAddress`, `slloanAmnt`, `slLandSize`, `slLandSizeAcr`, `slLandSizeRds`, `slTaxtype`, `slvillageName`, `is_online`, `online_cus_id` ) VALUES ( '"+req.body.idStreetLine+"', '7', '"+req.body.ass_id+"', '"+day+"', '"+req.body.slPlanNo+"', '"+req.body.slDescription+"', '"+req.body.slServayOfficer+"', '"+day2+"', '1', '1', '"+req.body.customer_idCustomer+"', '"+req.body.ward_id+"', '"+req.body.sl_reference_no+"', '"+req.body.slLandName+"', '"+req.body.slNotatyOfficer+"', '"+day3+"', '"+req.body.slDeedNo+"', '"+req.body.slApplicantName+"', '"+req.body.slGnId+"', '"+req.body.slPurpose+"', '"+req.body.slBnkorPlce+"', '"+req.body.slPlceAddress+"', '"+req.body.slloanAmnt+"', '"+req.body.slLandSize+"', '"+req.body.slLandSizeAcr+"', '"+req.body.slLandSizeRds+"', '"+req.body.slTaxtype+"', '"+req.body.slvillageName+"', '1', '"+req.body.online_cus_id+"' );",
        (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error);
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

exports.getsearchcustbl = (req, res, nex) => {
    console.log(req.body);
    db.execute("SELECT customer.idCustomer, customer.cus_name, customer.cus_nic FROM customer WHERE customer.cus_nic = '" + req.body.nic + "'",
        (error, rows, fildData) => {
            if (!error) {
                console.log(rows);
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.getsearchstreetlinetbl = (req, res, nex) => {
    console.log(req.body);
    //db.execute("SELECT customer.cus_name_sinhala, CONCAT( customer.cus_address_l1_sinhala, ' , ', customer.cus_address_l2_sinhala, ' , ', customer.cus_address_l3_sinhala ) AS address, sl_details.slPlanNo, sl_details.slServayDate, sl_details.slDeedNo, sl_details.slServayOfficer, CONCAT( 'ACR: ', sl_details.slLandSizeAcr, ' | RDS: ', sl_details.slLandSizeRds, ' | PRH: ', sl_details.slLandSize ) AS LandSize FROM sl_details INNER JOIN customer ON sl_details.slApplicantName = customer.idCustomer WHERE sl_details.slApplicantName = '" + req.body.cusid + "'",
      db.execute("SELECT customer.cus_name_sinhala, CONCAT( customer.cus_address_l1_sinhala, ' , ', customer.cus_address_l2_sinhala, ' , ', customer.cus_address_l3_sinhala ) AS address, sl_details.slPlanNo, sl_details.slServayDate, sl_details.slDeedNo, sl_details.slServayOfficer, CONCAT( 'ACR: ', sl_details.slLandSizeAcr, ' | RDS: ', sl_details.slLandSizeRds, ' | PRH: ', sl_details.slLandSize ) AS LandSize, sl_details.idStreetLine FROM sl_details INNER JOIN customer ON sl_details.slApplicantName = customer.idCustomer WHERE sl_details.slApplicantName = '" + req.body.cusid + "'",
        (error, rows, fildData) => {
            if (!error) {
                console.log(rows);
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.getrefno = (req, res, nex) => {
    console.log(req.body);
    db.execute("SELECT referenceno_tbl.refno FROM `referenceno_tbl` WHERE referenceno_tbl.application_catagory_idApplication_Catagory = '7' AND referenceno_tbl.office_idOffice = '1'",
        (error, rows, fildData) => {
            if (!error) {
                console.log(rows);
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.getrefid = (req, res, nex) => {
    console.log(req.body);
    db.execute("SELECT Max(referenceno.oder) AS ref_oder FROM `referenceno` WHERE referenceno.application_catagory_idApplication_Catagory = '7'",
        (error, rows, fildData) => {
            if (!error) {
                console.log(rows);
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.getslid = (req, res, nex) => {
    console.log(req.body);
    db.execute("SELECT Max(sl_details.idStreetLine) as max_sl FROM `sl_details`",
        (error, rows, fildData) => {
            if (!error) {
                console.log(rows);
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};

exports.getoldsldetails = (req, res, nex) => {
    console.log(req.body);
    db.execute("SELECT sl_details.ward_id, sl_details.slGnId, sl_details.slLandName, sl_details.slNotatyOfficer, sl_details.slNotaryDate, sl_details.slApplicantName, sl_details.slBnkorPlce, sl_details.slPlceAddress, sl_details.slloanAmnt, sl_details.slLandSizeAcr, sl_details.slLandSizeRds, sl_details.slLandSize, sl_details.slvillageName, sl_details.slTaxtype, sl_details.customer_idCustomer, sl_details.ass_id FROM sl_details WHERE sl_details.idStreetLine = '" + req.body.slid + "'",
        (error, rows, fildData) => {
            if (!error) {
                console.log(rows);
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
};