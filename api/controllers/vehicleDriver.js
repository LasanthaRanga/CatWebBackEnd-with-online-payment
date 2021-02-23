const vdb = require('../util/vehicleDB');
const cdb = require('../util/database');
var dateFormat = require('dateformat');


exports.getDrivers = (req, res, next) => {
    console.log(req.body);
    try {
        var quary = "SELECT `user`.idUser AS id,`user`.user_full_name AS name FROM `user` INNER JOIN user_has_approval_cat ON user_has_approval_cat.User_idUser=`user`.idUser INNER JOIN approval_cat ON user_has_approval_cat.Approval_cat_idApproval_cat=approval_cat.idApproval_cat WHERE approval_cat.idApproval_cat=35";
        cdb.execute(quary, (er, ro, fd) => {
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

exports.saveDriver = (req, res, next) => {
    console.log(req.body);

    try {
        var quary = "INSERT INTO  `v_driver`(  `userId`, `from`,   `status`, `basicId`, `driverName`) VALUES " +
            "(  '" + req.body.userID + "', '" + req.body.day + "',   1,  '" + req.body.basicID + "', '" + req.body.driverName + "')";
        vdb.execute(quary, (er, ro, fd) => {
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

exports.getVehicleDriver = (req, res, next) => {
    console.log(req.body);

    try {
        var quary = "SELECT v_driver.idDriver,v_driver.userId,v_driver.`from`,v_driver.`to`,v_driver.`status`,v_driver.`comment`,v_driver.basicId,v_driver.driverName FROM v_driver WHERE v_driver.basicId='" + req.body.id + "' AND v_driver.`status`='" + req.body.status + "'";
        vdb.execute(quary, (er, ro, fd) => {
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

exports.deactiveDriver = (req, res, next) => {
    console.log(req.body);

    try {
        var quary = "UPDATE `v_driver` SET `to`='" + req.body.day + "',`status`=2,`comment`='" + req.body.comment + "' WHERE `idDriver`='" + req.body.idDriver + "'";
        vdb.execute(quary, (er, ro, fd) => {
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