const db = require('../util/vehicleDB');
var dateFormat = require('dateformat');

//(id, status)
exports.getTyreSize = (req, res, next) => {
    console.log(req.body);
    try {
        var quary = "SELECT v_tayar.idTayar,v_tayar.sizefront,v_tayar.pressurefront,v_tayar.sizerear,v_tayar.pressurerear,v_tayar.tstatus,v_tayar.basicinfo_id FROM v_tayar WHERE v_tayar.basicinfo_id='" + req.body.id + "'";
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

exports.getWheel = (req, res, next) => {
    try {
        var quary = "SELECT v_tayar_position.id,v_tayar_position.position FROM v_tayar_position";
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


exports.getTyres = (req, res, next) => {
    try {
        var quary = "SELECT v_tayar_position.position,v_tayar_replace.idTayarReplace,v_tayar_replace.`day`,v_tayar_replace.make,v_tayar_replace.makerNumber,v_tayar_replace.userId,v_tayar_replace.`status`,v_tayar_replace.deactiveComment,v_tayar_replace.basicID,v_tayar_position.id, v_tayar_replace.mr  FROM v_tayar_replace INNER JOIN v_tayar_position ON v_tayar_replace.position=v_tayar_position.id WHERE v_tayar_replace.basicID='" + req.body.id + "' AND v_tayar_replace.`status`='" + req.body.status + "'";
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

exports.saveTyre = (req, res, next) => {
    try {
        var quary = "INSERT INTO `v_tayar_replace` (  `day`, `make`, `makerNumber`, `position`, `userId`, `status`,  `basicID`, `mr` )"
            + " VALUES	(   '" + req.body.day + "', '" + req.body.make + "', '" + req.body.makerNumber + "', " + req.body.position + ", '" + req.body.userId + "', 1,  '" + req.body.basicID + "','" + req.body.mr + "' )";
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


exports.deactiveTyre = (req, res, next) => {
    try {
        var quary = "UPDATE `v_tayar_replace` SET `status`=2,`deactiveComment`='" + req.body.comment + "' WHERE `idTayarReplace`= '" + req.body.idTayarReplace + "'";
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

