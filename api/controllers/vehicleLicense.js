const db = require('../util/vehicleDB');
var dateFormat = require('dateformat');

//(id, status)
exports.getLicens = (req, res, next) => {
    console.log(req.body);
    try {
        var quary = "SELECT v_license.idLicense,v_license.type,v_license.authority,v_license.number,v_license.`from`,v_license.`to`,v_license.date,v_license.amount,v_license.`status`,v_license.deactive_comment,v_license.other,v_license.basic_id,v_license_type.idLicensType,v_license_type.licensType FROM v_license INNER JOIN v_license_type ON v_license.type=v_license_type.idLicensType WHERE v_license.`status`='" + req.body.status + "' AND v_license.basic_id='" + req.body.id + "' ";
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


exports.getLicenseTypes = (req, res, next) => {
    try {
        var quary = "SELECT v_license_type.idLicensType,v_license_type.licensType FROM v_license_type";
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

exports.getLicenseAuthority = (req, res, next) => {
    try {
        var quary = "SELECT insurencecompany.idInsurenceCompany,insurencecompany.InsurenceCompany_name FROM insurencecompany";
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


exports.saveLicense = (req, res, next) => {
    try {
        var quary = "INSERT INTO `v_license` (  `type`, `authority`, `number`, `from`, `to`, `date`, `amount`, `status`,  `other`, `basic_id` )"
            + " VALUES	( '" + req.body.type + "', '" + req.body.autho + "', '" + req.body.no + "', '" + req.body.from + "', '" + req.body.to + "', '" + req.body.day + "', '" + req.body.amount + "', 1,  '', " + req.body.basicID + " )";
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


exports.deactiveLicense = (req, res, next) => {
    try {
        var quary = "UPDATE `v_license` SET `status`=2,`deactive_comment`='" + req.body.comment + "' WHERE `idLicense`= '" + req.body.idLicense + "'";
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

