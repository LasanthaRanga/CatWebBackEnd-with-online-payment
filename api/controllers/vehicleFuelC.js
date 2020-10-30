const db = require('../util/vehicleDB');
var dateFormat = require('dateformat');

//(id, status)
exports.getFuelc = (req, res, next) => {
    try {
        var quary = "SELECT v_fuel_c.idFuelC,v_fuel_c.number,v_fuel_c.resarch_date,v_fuel_c.auditor,v_fuel_c.user_id,v_fuel_c.with_load,v_fuel_c.without_load,v_fuel_c.`status`,v_fuel_c.`comment`,v_fuel_c.deactive_comment,v_fuel_c.basic_id FROM v_fuel_c WHERE v_fuel_c.basic_id='" + req.body.id + "' AND v_fuel_c.`status`='" + req.body.status + "'";
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

//(name,qty,des,id)
exports.saveFuelc = (req, res, next) => {
    try {
        var quary = "INSERT INTO  `v_fuel_c`(  `number`, `resarch_date`, `auditor`, `user_id`, `with_load`, `without_load`, `status`, `comment`, `deactive_comment`, `basic_id`) " +
            " VALUES (  '" + req.body.number + "', '" + req.body.resarchDate + "', '" + req.body.auditor + "', '" + req.body.userId + "', '" + req.body.withLoad + "', '" + req.body.withoutLoad + "', 1, '" + req.body.comment + "', '', '" + req.body.basicID + "')";
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

//(comment, idTool)
exports.deactiveFuelc = (req, res, next) => {
    try {
        var quary = "UPDATE `v_fuel_c` SET `status`=2,`deactive_comment`='" + req.body.deactiveComment + "' WHERE `idFuelC`=" + req.body.idFuelC;
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