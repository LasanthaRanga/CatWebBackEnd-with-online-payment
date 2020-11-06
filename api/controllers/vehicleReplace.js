const db = require('../util/vehicleDB');
var dateFormat = require('dateformat');

exports.getReplace = (req, res, next) => {
    console.log(req.body);
    try {
        var quary = "SELECT v_replace.idReplace,v_replace.inspected_date,v_replace.replace_date,v_replace.place,v_replace.description,v_replace.repair_cost,v_replace.full_total,v_replace.`status`,v_replace.col1,v_replace.col2,v_replace.col3,v_replace.col4,v_replace.basic_id,v_replace.userId FROM v_replace WHERE v_replace.basic_id= " + req.body.id + " AND v_replace.`status`= " + req.body.status;
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

exports.getParts = (req, res, next) => {
    console.log(req.body);
    try {
        var quary = "SELECT v_parts.idParts,v_parts.itemName,v_parts.`comment`,v_parts.waranty,v_parts.reason,v_parts.amount,v_parts.`status`,v_parts.replace_id FROM v_parts WHERE v_parts.replace_id = " + req.body.id;
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

exports.saveReplace = (req, res, next) => {
    var r = req.body;
    console.log(req.body);
    //   partsList: this.partsList
    try {
        var quary = "INSERT INTO `v_replace` (`inspected_date`,`replace_date`,`place`,`description`,`repair_cost`,`full_total`,`status`,`basic_id`,`userId`) VALUES " +
            "('" + r.inspectedDate + "','" + r.replaceDate + "','" + r.place + "','" + r.description + "','" + r.repairCost + "','" + r.fullTotal + "',1," + r.basicID + ",'" + r.userId + "')";
        db.execute(quary, (er, ro, fd) => {
            if (!er) {
                var id = ro.insertId;
                r.partsList.forEach(el => {
                    var qq = "INSERT INTO `v_parts` (`itemName`,`comment`,`waranty`,`reason`,`amount`,`status`,`replace_id`)" +
                        " VALUES ('" + el.itemName + "','" + el.comment + "','" + el.waranty + "','" + el.reason + "','" + el.amount + "','1','" + id + "')";
                    db.execute(qq, (err, roo, fid) => {
                        console.log(roo);
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

exports.deactiveReplace = (req, res, next) => {
    console.log(req.body);
    try {
        var quary = "UPDATE `v_replace` SET `status`=2,`col1`='" + req.body.comment + "' WHERE `idReplace`= " + req.body.id;
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
