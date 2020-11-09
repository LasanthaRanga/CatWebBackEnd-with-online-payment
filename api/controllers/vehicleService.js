const db = require('../util/vehicleDB');
var dateFormat = require('dateformat');


exports.getServiceTypes = (req, res, next) => {
    console.log(req.body);
    try {
        var quary = "SELECT v_service_type.idServiceType,v_service_type.types FROM v_service_type";
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

exports.getServices = (req, res, next) => {
    console.log(req.body);
    try {
        var quary = "SELECT v_service.idService,v_service.date,v_service.meeter,v_service.`comment`,v_service.deactiveComment,v_service.stype,v_service.`status`,v_service.basic_id,v_service.total,v_service_type.types FROM v_service INNER JOIN v_service_type ON v_service_type.idServiceType=v_service.`status` WHERE v_service.basic_id='" + req.body.id + "' AND v_service.`status`='" + req.body.status + "'";
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



exports.getServiceOils = (req, res, next) => {
    console.log(req.body);
    try {
        var quary = "SELECT v_service_oilpart.idOilPart,v_service_oilpart.`name`,v_service_oilpart.qty,v_service_oilpart.`value`,v_service_oilpart.service_id FROM v_service_oilpart WHERE v_service_oilpart.service_id= " + req.body.id;
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


exports.saveService = (req, res, next) => {
    console.log(req.body);
    let sv = req.body;
    try {
        var quary = " INSERT INTO  `v_service` (  `date`, `meeter`, `comment`,  `stype`, `status`, `basic_id`,`total` ) " +
            "  VALUES	(  '" + sv.date + "', '" + sv.meeter + "', '" + sv.comment + "',  '" + sv.stype + "', 1, '" + sv.basicID + "','" + sv.total + "') ";
        db.execute(quary, (er, ro, fd) => {
            if (!er) {
                var id = ro.insertId;
                sv.partsList.forEach(el => {
                    var qq = "INSERT INTO  `v_service_oilpart` (  `name`, `qty`, `value`, `service_id` )" +
                        "  VALUES	(  '" + el.name + "', '" + el.qty + "', '" + el.value + "', '" + id + "' )";
                    db.execute(qq, (err, roo, fid) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(roo);
                        }

                    });
                });
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