const db = require('../util/vehicleDB');
var dateFormat = require('dateformat');

//(id, status)
exports.getTools = (req, res, next) => {
    try {
        var quary = "SELECT v_tool.idTool,v_tool.tool_name,v_tool.qty,v_tool.description,v_tool.`status`,v_tool.basic_id FROM v_tool WHERE v_tool.basic_id='" + req.body.id + "' AND v_tool.`status`='" + req.body.status + "'";
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
exports.saveTools = (req, res, next) => {
    try {
        var quary = "INSERT INTO `v_tool`(  `tool_name`, `qty`, `description`, `status`, `basic_id`)" +
            " VALUES ( '" + req.body.name + "', " + req.body.qty + ", '" + req.body.des + "', 1, " + req.body.id + ")";
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
exports.deactiveTools = (req, res, next) => {
    try {
        var quary = "UPDATE `v_tool` SET `status`=2,`deactive_comment`='" + req.body.comment + "'  WHERE `idTool`=" + req.body.idTool;
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