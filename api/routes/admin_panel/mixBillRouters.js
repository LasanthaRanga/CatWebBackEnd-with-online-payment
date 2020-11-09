var express = require('express');
var router = express.Router();
const db = require('../../util/database');
var appRoot = require('app-root-path');
var dateFormat = require('dateformat');
const mixBill=require('../../controllers/admion_panel/mixBill');

router.post("/getallBills",mixBill.getallBills)
router.post("/getBill",mixBill.getBills);
router.post("/getapplicationcat",mixBill.getapplicationcat);
router.post("/updatecancleuser",mixBill.updatecanceluser);
router.post("/cancelrecipt",mixBill.canclerecipt);
router.post("/canclemixincome",mixBill.canclemixincome);
router.post("/loadremoveno",mixBill.loadremoveno);
router.post("/getcancelorder",mixBill.getcancelorder);
router.post("/getreciptdatabyid",mixBill.getreciptdatabyid);
router.post("/getremovecode",mixBill.getremovecode);
router.post("/saveremovedetails",mixBill.saveremovedetails);
router.post("/getremovelist",mixBill.getremovelist);
module.exports = router;