const db = require('../../util/database');
var dateFormat = require('dateformat');


exports.getallBills = (req, res, next) => {
    try {
        var quary = "SELECT receipt.receipt_print_no, receipt.idReceipt FROM `receipt` WHERE receipt.receipt_status <> '2' AND receipt.idReceipt > 6500 AND receipt.Application_Catagory_idApplication_Catagory NOT IN ('15')";
        db.execute(quary, (er, ro, fd) => {
            if (!er) {
                res.send(ro);
            } else {
                console.log(er);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

//(id, status)
exports.getBills = (req, res, next) => {
    try {
        var quary = "SELECT receipt.receipt_print_no, receipt.idReceipt FROM `receipt` WHERE receipt.receipt_print_no LIKE '%" +req.body.reciptno+"%' AND receipt.receipt_status <> '2'";
        db.execute(quary, (er, ro, fd) => {
            if (!er) {
                res.send(ro);
            } else {
                console.log(er);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.getapplicationcat = (req, res, next) => {
    try {
        var quary = "SELECT receipt.Application_Catagory_idApplication_Catagory, receipt.recept_applicationId FROM `receipt` WHERE receipt.idReceipt = '" +req.body.recipid+"'";
        db.execute(quary, (er, ro, fd) => {
            if (!er) {
                res.send(ro);
            } else {
                console.log(er);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.updatecanceluser = (req, res, next) => {
    try {
        var timeInMss = Date.now()
        var quary = "UPDATE `receipt` SET `receipt_status` = '2', `cancle_user` = '"+req.body.user+"', `cancle_reson` = '"+req.body.description+"' WHERE ( `idReceipt` = '"+req.body.recipid+"' );";
        db.execute(quary, (er, ro, fd) => {
            if (!er) {
                res.send(ro);
            } else {
                console.log(er);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.canclerecipt = (req, res, next) => {
    try {
        var quary = "UPDATE `account_ps_three` SET `report_status`='2' WHERE (`report_ricipt_id`='"+req.body.recipid+"');";
        db.execute(quary, (er, ro, fd) => {
            if (!er) {
                res.send(ro);
            } else {
                console.log(er);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.canclemixincome = (req, res, next) => {
    try {
        var quary = "UPDATE `mixincome` SET  `mixincome_status`='2' WHERE (`idMixincome`='"+req.body.idmixincome+"');";
        db.execute(quary, (er, ro, fd) => {
            if (!er) {
                res.send(ro);
            } else {
                console.log(er);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.loadremoveno = (req, res, next) => {
    try {
        var quary = "SELECT remove_code_create.remove_code_create_code FROM `remove_code_create` WHERE remove_code_create.remove_code_create_app_cat = '"+req.body.appcat+"'";
        db.execute(quary, (er, ro, fd) => {
            if (!er) {
                res.send(ro);
            } else {
                console.log(er);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.getcancelorder = (req, res, next) => {
    try {
        var quary = "SELECT IFNULL( Max( remove_details.remove_order ), 0 ) AS max_id FROM `remove_details` WHERE remove_details.remove_application_category = '"+req.body.appcat+"'";
        db.execute(quary, (er, ro, fd) => {
            if (!er) {
                res.send(ro);
            } else {
                console.log(er);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}


exports.getreciptdatabyid = (req, res, next) => {
    try {
        var quary = "SELECT receipt.idReceipt, receipt.Application_Catagory_idApplication_Catagory, receipt.recept_applicationId, receipt.receipt_print_no, receipt.cheack, receipt.cesh, receipt.receipt_total, receipt.receipt_day, receipt.receipt_status, receipt.receipt_syn, receipt.chque_no, receipt.chque_date, receipt.chque_bank, receipt.oder, receipt.office_idOffice, receipt.receipt_account_id, receipt.receipt_user_id, receipt.ribno, receipt.receipt_time, receipt.income_expense, receipt.cus_id, receipt.cross_recipt_or_voucher, receipt.pay_type, receipt.amount FROM `receipt` WHERE receipt.idReceipt = '"+req.body.recipid+"'";
        db.execute(quary, (er, ro, fd) => {
            if (!er) {
                res.send(ro);
            } else {
                console.log(er);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.saveremovedetails = (req, res, next) => {
    try {
        var quary = "INSERT INTO `remove_details` ( `remove_rec_id`, `remove_rec_no`, `remove_date`, `remove_time`, `remove_user_id`, `remove_no`, `remove_order`, `remove_application_category`, `remove_after_opay`, `remove_before_opay`, `remove_description` ) VALUES ( '"+req.body.recid+"', '"+req.body.recno+"', '"+req.body.canceldate+"', '"+req.body.canceltime+"', '"+req.body.userid+"', '"+req.body.removecode+"', '"+req.body.removeorder+"', '"+req.body.appcat+"', '0', '0', '"+req.body.description+"' );";
        db.execute(quary, (er, ro, fd) => {
            if (!er) {
                res.send(ro);
            } else {
                console.log(er);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}


exports.getremovecode = (req, res, next) => {
    try {
        var quary = "SELECT remove_code_create.remove_code_create_code, remove_code_create.remove_code_create_app_cat FROM remove_code_create INNER JOIN receipt ON receipt.Application_Catagory_idApplication_Catagory = remove_code_create.remove_code_create_app_cat WHERE receipt.idReceipt = '"+req.body.recipid+"'";
        db.execute(quary, (er, ro, fd) => {
            if (!er) {
                res.send(ro);
            } else {
                console.log(er);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.getremovelist = (req, res, next) => {
    try {
        var quary = "SELECT remove_details.remove_rec_no, remove_details.remove_description, remove_details.remove_details_id FROM `remove_details`";
        db.execute(quary, (er, ro, fd) => {
            if (!er) {
                res.send(ro);
            } else {
                console.log(er);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}
