const db = require('../util/vehicleDB');
var dateFormat = require('dateformat');

exports.getAllVehicles = (req, res, next) => {
    try {
        db.execute('SELECT v_basicinfo.idV_Basicinfo,v_basicinfo.vbf_modle,v_basicinfo.vbf_chassis,v_basicinfo.vbf_localagent,v_basicinfo.vbf_enginno,v_basicinfo.vbf_myear,v_basicinfo.vbf_pvalue,v_basicinfo.vbf_regdate,v_basicinfo.vbf_pcapacity,v_basicinfo.vbf_status,v_basicinfo.user_idUser,v_basicinfo.vbf_systemdate,v_basicinfo.V_Origin_idV_Origin,v_basicinfo.V_type_idV_type,v_basicinfo.V_make_idV_make,v_basicinfo.V_transmision_idV_transmision,v_basicinfo.V_condition_idV_condition,v_basicinfo.V_color_idV_color,v_basicinfo.vbf_regno2,v_basicinfo.V_Basicinfocol,v_basicinfo.V_Basicinfocol1,v_basicinfo.V_Basicinfocol2,CONCAT(v_provincecode.V_provincecode,"  ",v_basicinfo.vbf_regno1) AS regno,v_provincecode.idV_provincecode,v_type.V_type_name,v_make.V_make_company FROM v_basicinfo INNER JOIN v_provincecode ON v_basicinfo.V_provincecode_idV_provincecode=v_provincecode.idV_provincecode INNER JOIN v_type ON v_basicinfo.V_type_idV_type=v_type.idV_type INNER JOIN v_make ON v_basicinfo.V_make_idV_make=v_make.idV_make', (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log(error);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.getAllVehicleById = (req, res, next) => {
    try {
        db.execute("SELECT v_basicinfo.idV_Basicinfo,v_basicinfo.vbf_modle,v_basicinfo.vbf_chassis,v_basicinfo.vbf_localagent,v_basicinfo.vbf_enginno,v_basicinfo.vbf_myear,v_basicinfo.vbf_pvalue,v_basicinfo.vbf_regdate,v_basicinfo.vbf_pcapacity,v_basicinfo.vbf_status,v_basicinfo.user_idUser,v_basicinfo.vbf_systemdate,v_basicinfo.V_Origin_idV_Origin,v_basicinfo.V_type_idV_type,v_basicinfo.V_make_idV_make,v_basicinfo.V_transmision_idV_transmision,v_basicinfo.V_condition_idV_condition,v_basicinfo.V_color_idV_color,v_basicinfo.V_provincecode_idV_provincecode,v_basicinfo.vbf_regno1,v_basicinfo.vbf_regno2,v_basicinfo.V_Basicinfocol,v_basicinfo.V_Basicinfocol1,v_basicinfo.V_Basicinfocol2,v_basicinfo.V_parchers_date,v_basicinfo.V_lono,v_basicinfo.V_payload,v_battery.idBattery,v_battery.btype,v_battery.voltage,v_battery.amperage,v_battery.length,v_battery.width,v_battery.height,v_battery.bstatus,v_battery.basicinfo_id,v_color.idV_color,v_color.V_color_name,v_condition.idV_condition,v_condition.V_condition_type,v_engin.idEngin,v_engin.engin_no,v_engin.engin_type,v_engin.horsepower,v_engin.injection_pump,v_engin.atomiser,v_engin.coil,v_engin.lighting,v_engin.cylinders,v_engin.bore,v_engin.strock,v_engin.carburettor,v_engin.jetsmain_size,v_engin.compensating,v_engin.choke,v_engin.idBasicinfo,v_make.idV_make,v_make.V_make_company,v_origin.idV_Origin,v_origin.V_Origin_name,v_provincecode.idV_provincecode,v_provincecode.V_provincecode,v_tayar.idTayar,v_tayar.sizefront,v_tayar.pressurefront,v_tayar.sizerear,v_tayar.pressurerear,v_tayar.tstatus,v_tayar.basicinfo_id,v_transmision.idV_transmision,v_transmision.V_transmision_name,v_type.idV_type,v_type.V_type_name FROM v_basicinfo LEFT JOIN v_battery ON v_battery.basicinfo_id=v_basicinfo.idV_Basicinfo LEFT JOIN v_color ON v_basicinfo.V_color_idV_color=v_color.idV_color LEFT JOIN v_condition ON v_basicinfo.V_condition_idV_condition=v_condition.idV_condition LEFT JOIN v_engin ON v_engin.idBasicinfo=v_basicinfo.idV_Basicinfo LEFT JOIN v_make ON v_basicinfo.V_make_idV_make=v_make.idV_make LEFT JOIN v_origin ON v_basicinfo.V_Origin_idV_Origin=v_origin.idV_Origin LEFT JOIN v_provincecode ON v_basicinfo.V_provincecode_idV_provincecode=v_provincecode.idV_provincecode LEFT JOIN v_tayar ON v_tayar.basicinfo_id=v_basicinfo.idV_Basicinfo LEFT JOIN v_transmision ON v_basicinfo.V_transmision_idV_transmision=v_transmision.idV_transmision LEFT JOIN v_type ON v_basicinfo.V_type_idV_type=v_type.idV_type WHERE v_basicinfo.idV_Basicinfo=" + req.body.id, (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log(error);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.saveBasic = (req, res, next) => {
    var v = req.body;

    console.log(v);

    try {
        var day = dateFormat(new Date(), "yyyy-mm-dd");

        db.execute("INSERT INTO `v_basicinfo` (`vbf_modle`,`vbf_chassis`,`vbf_localagent`,`vbf_myear`,`vbf_pvalue`,`vbf_regdate`,`vbf_pcapacity`,`vbf_status`,`user_idUser`,`vbf_systemdate`,`V_Origin_idV_Origin`,`V_type_idV_type`,`V_make_idV_make`,`V_transmision_idV_transmision`,`V_condition_idV_condition`,`V_color_idV_color`,`V_provincecode_idV_provincecode`,`vbf_regno1`,`V_parchers_date`,`V_lono`,`V_payload`, `V_Basicinfocol`) " +
            "VALUES ('" + v.model + "','" + v.chassisNo + "','" + v.localAgent + "', '" + v.manufacturedYear + "','" + v.purchasedValue + "','" + v.registrationDate + "','" + v.passengerCapacity + "',1, '" + v.idUser + "','" + day + "' ,'" + v.origins + "','" + v.vehicleType + "','" + v.make + "','" + v.transmission + "','" + v.condition + "','" + v.color + "','" + v.province + "','" + v.registrationNo + "','" + v.purchasedDate + "','" + v.lono + "','" + v.payLoad + "','" + v.description + "')", (er, rows, fildData) => {
                if (!er) {
                    console.log(rows);
                    var id = rows.insertId;

                    db.execute("INSERT INTO `v_oilinfo` (`v_basicinfo_idV_Basicinfo`) VALUES ('" + id + "')", (err, ro, fd) => {
                        if (!err) {
                            // res.send(rows);
                        } else {
                            console.log(err);
                        }
                    });

                    db.execute("INSERT INTO `v_battery` (`basicinfo_id`) VALUES ('" + id + "')", (err, ro, fd) => {
                        if (!err) {
                            // res.send(rows);
                        } else {
                            console.log(err);
                        }
                    });

                    db.execute("INSERT INTO  `v_tayar`(`basicinfo_id`) VALUES  (" + id + ")", (err, ro, fd) => {
                        if (!err) {
                            // res.send(rows);
                        } else {
                            console.log(err);
                        }
                    });

                    db.execute("INSERT INTO `v_engin` (`idBasicinfo`) VALUES (" + id + ")", (err, ro, fd) => {
                        if (!err) {
                            res.send(rows);
                        } else {
                            console.log(err);
                        }
                    });

                } else {
                    console.log(er);
                }
            });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.updateBasic = (req, res, next) => {
    var v = req.body;

    console.log(v);

    try {
        var day = dateFormat(new Date(), "yyyy-mm-dd");
        var quary = "UPDATE `v_basicinfo` "
            + "  SET `vbf_modle` = '" + v.model + "', "
            + "  `vbf_chassis` = '" + v.chassisNo + "', "
            + "  `vbf_localagent` = '" + v.localAgent + "', "
            + "  `vbf_myear` = '" + v.manufacturedYear + "', "
            + "  `vbf_pvalue` = " + v.purchasedValue + ", "
            + "  `vbf_regdate` = '" + v.registrationDate + "', "
            + "  `vbf_pcapacity` = " + v.passengerCapacity + ", "
            + "  `vbf_status` = '1', "
            + "  `user_idUser` = " + v.idUser + ", "
            + "  `vbf_systemdate` = '" + day + "', "
            + "  `V_Origin_idV_Origin` = " + v.origins + ", "
            + "  `V_type_idV_type` = " + v.vehicleType + ", "
            + "  `V_make_idV_make` = " + v.make + ", "
            + "  `V_transmision_idV_transmision` = " + v.transmission + ", "
            + "  `V_condition_idV_condition` = " + v.condition + ", "
            + "  `V_color_idV_color` = " + v.color + ", "
            + "  `V_provincecode_idV_provincecode` = " + v.province + ", "
            + "  `vbf_regno1` = '" + v.registrationNo + "', "
            + "  `vbf_regno2` = NULL, "
            + "  `V_Basicinfocol` = '" + v.description + "', "
            + "  `V_Basicinfocol1` = NULL, "
            + "  `V_Basicinfocol2` = NULL, "
            + "  `V_parchers_date` = '" + v.purchasedDate + "', "
            + "  `V_lono` = '" + v.lono + "', "
            + "  `V_payload` = '" + v.payLoad + "'  "
            + "  WHERE "
            + "      `idV_Basicinfo` = " + v.basicID + "";


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


exports.getBasic = (req, res, next) => {
    try {
        db.execute("SELECT v_basicinfo.idV_Basicinfo,v_basicinfo.vbf_modle,v_basicinfo.vbf_chassis,v_basicinfo.vbf_localagent,v_basicinfo.vbf_enginno,v_basicinfo.vbf_myear,v_basicinfo.vbf_pvalue,v_basicinfo.vbf_regdate,v_basicinfo.vbf_pcapacity,v_basicinfo.vbf_status,v_basicinfo.user_idUser,v_basicinfo.vbf_systemdate,v_basicinfo.V_Origin_idV_Origin,v_basicinfo.V_type_idV_type,v_basicinfo.V_make_idV_make,v_basicinfo.V_transmision_idV_transmision,v_basicinfo.V_condition_idV_condition,v_basicinfo.V_color_idV_color,v_basicinfo.V_provincecode_idV_provincecode,v_basicinfo.vbf_regno1,v_basicinfo.vbf_regno2,v_basicinfo.V_Basicinfocol,v_basicinfo.V_Basicinfocol1,v_basicinfo.V_Basicinfocol2,v_basicinfo.V_parchers_date,v_basicinfo.V_lono,v_basicinfo.V_payload FROM v_basicinfo WHERE v_basicinfo.idV_Basicinfo=" + req.body.id, (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log(error);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}




exports.saveOil = (req, res, next) => {
    var o = req.body;

    console.log(o);
    const oil = {
        basicID: this.basicID,
        fuel: this.fuel,
        ftank: this.ftank,
        frtank: this.frtank,
        oiltyp1: this.oiltyp1,
        oiltyp2: this.oiltyp2,
        oiltyp3: this.oiltyp3,
        oiltyp4: this.oiltyp4,
        oiltyp5: this.oiltyp5,
        oiltyp6: this.oiltyp6,
        oiltyp7: this.oiltyp7,
        oiltyp8: this.oiltyp8,
        oiltyp9: this.oiltyp9,
        oiltyp10: this.oiltyp10,
        o1c: this.o1c,
        o2c: this.o2c,
        o3c: this.o3c,
        o4c: this.o4c,
        o5c: this.o5c,
        o6c: this.o6c,
        o7c: this.o7c,
        o8c: this.o8c,
        o9c: this.o9c,
        o10c: this.o10c
    };


    try {
        var day = dateFormat(new Date(), "yyyy-mm-dd");

        var query = "UPDATE `v_oilinfo` "
            + " SET `vof_engin_oil` = '" + o.oiltyp1 + "',"
            + " `vof_engin_cap` = '" + o.o1c + "',"
            + " `vof_gear_oil` = '" + o.oiltyp2 + "',"
            + " `vof_gear_cap` = '" + o.o2c + "',"
            + " `vof_differential_oil` = '" + o.oiltyp3 + "',"
            + " `vof_differential_cap` = '" + o.o3c + "',"
            + " `vof_hydraulic_oil` = '" + o.oiltyp4 + "',"
            + " `vof_hydraulic_cap` = '" + o.o4c + "',"
            + " `vof_transmission_oil` = '" + o.oiltyp5 + "',"
            + " `vof_transmission_cap` = '" + o.o5c + "',"
            + " `vof_steering_oil` = '" + o.oiltyp6 + "',"
            + " `vof_steering_cap` = '" + o.o6c + "',"
            + " `vof_brake_oil` = '" + o.oiltyp7 + "',"
            + " `vof_brake_cap` = '" + o.o7c + "',"
            + " `vof_cluth_oil` = '" + o.oiltyp8 + "',"
            + " `vof_capacity` = '" + o.o8c + "',"
            + " `vof_crankcase_oil` = '" + o.oiltyp9 + "',"
            + " `vof_crankcase_cap` = '" + o.o9c + "',"
            + " `vof_shokabsob_oil` = '" + o.oiltyp10 + "',"
            + " `vof_shokabsob_cap` = '" + o.o10c + "',"
            + " `fueltype` = '" + o.fuel + "',"
            + " `fuelMainCapacity` = '" + o.ftank + "',"
            + " `fuelReserveCapacity` = '" + o.frtank + "'"
            + " WHERE "
            + " `v_basicinfo_idV_Basicinfo` = '" + o.basicID + "'"


        db.execute(query, (er, rows, fildData) => {
            if (!er) {
                res.send(rows);
            } else {
                console.log(er);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.getOil = (req, res, next) => {
    try {
        var quary = "SELECT v_oilinfo.idV_Oilinfo,v_oilinfo.vof_engin_oil,v_oilinfo.vof_engin_cap,v_oilinfo.vof_gear_oil,v_oilinfo.vof_gear_cap,v_oilinfo.vof_differential_oil,v_oilinfo.vof_differential_cap,v_oilinfo.vof_hydraulic_oil,v_oilinfo.vof_hydraulic_cap,v_oilinfo.vof_transmission_oil,v_oilinfo.vof_transmission_cap,v_oilinfo.vof_steering_oil,v_oilinfo.vof_steering_cap,v_oilinfo.vof_brake_oil,v_oilinfo.vof_brake_cap,v_oilinfo.vof_cluth_oil,v_oilinfo.vof_capacity,v_oilinfo.vof_crankcase_oil,v_oilinfo.vof_crankcase_cap,v_oilinfo.vof_shokabsob_oil,v_oilinfo.vof_shokabsob_cap,v_oilinfo.fueltype,v_oilinfo.fuelMainCapacity,v_oilinfo.fuelReserveCapacity,v_oilinfo.v_basicinfo_idV_Basicinfo FROM v_oilinfo WHERE v_oilinfo.v_basicinfo_idV_Basicinfo=" + req.body.id;
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


exports.saveEngin = (req, res, next) => {

    var e = req.body;
    console.log(e);

    const engin = {
        basicID: this.basicID,
        enginNo: this.enginNo,
        enginType: this.enginType,
        horsepower: this.horsepower,
        injectionPump: this.injectionPump,
        atomiser: this.atomiser,
        coil: this.coil,
        lighting: this.lighting,
        cylinders: this.cylinders,
        bore: this.bore,
        strock: this.strock,
        carburettor: this.carburettor,
        jetsmainSize: this.jetsmainSize,
        compensating: this.compensating,
        choke: this.choke
    }

    try {

        var query = "UPDATE  `v_engin` "
            + " SET `engin_no` = '" + e.enginNo + "', "
            + " `engin_type` = '" + e.enginType + "', "
            + " `horsepower` = '" + e.horsepower + "', "
            + " `injection_pump` = '" + e.injectionPump + "', "
            + " `atomiser` = '" + e.atomiser + "', "
            + " `coil` = '" + e.coil + "', "
            + " `lighting` = '" + e.lighting + "', "
            + " `cylinders` = '" + e.cylinders + "', "
            + " `bore` = '" + e.bore + "', "
            + " `strock` = '" + e.strock + "', "
            + " `carburettor` = '" + e.carburettor + "', "
            + " `jetsmain_size` = '" + e.jetsmainSize + "', "
            + " `compensating` = '" + e.compensating + "', "
            + " `choke` = '" + e.choke + "' "
            + " WHERE "
            + " `idBasicinfo` = '" + e.basicID + "'"


        db.execute(query, (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log(error);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}


exports.getEngin = (req, res, next) => {
    try {
        var quary = "SELECT v_engin.idEngin,v_engin.engin_no,v_engin.engin_type,v_engin.horsepower,v_engin.injection_pump,v_engin.atomiser,v_engin.coil,v_engin.lighting,v_engin.cylinders,v_engin.bore,v_engin.strock,v_engin.carburettor,v_engin.jetsmain_size,v_engin.compensating,v_engin.choke,v_engin.idBasicinfo FROM v_engin WHERE v_engin.idBasicinfo=" + req.body.id;
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



exports.saveBattry = (req, res, next) => {

    var b = req.body;
    console.log(b);

    const battry = {
        basicID: this.basicID,
        btype: this.btype,
        voltage: this.voltage,
        amperage: this.amperage,
        length: this.length,
        width: this.width,
        height: this.height
    }

    try {

        var query = "UPDATE  `v_battery` "
            + " SET `btype` = '" + b.btype + "',"
            + " `voltage` = '" + b.voltage + "',"
            + " `amperage` = '" + b.amperage + "',"
            + " `length` = '" + b.length + "',"
            + " `width` = '" + b.width + "',"
            + " `height` = '" + b.height + "',"
            + " `bstatus` = 1"
            + " WHERE"
            + " `basicinfo_id` = " + b.basicID + "";


        db.execute(query, (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log(error);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.getBattry = (req, res, next) => {
    try {
        var quary = "SELECT v_battery.idBattery,v_battery.btype,v_battery.voltage,v_battery.amperage,v_battery.length,v_battery.width,v_battery.height,v_battery.bstatus,v_battery.basicinfo_id FROM v_battery WHERE v_battery.basicinfo_id = " + req.body.id;
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


exports.saveTayer = (req, res, next) => {

    var t = req.body;
    console.log(t);

    const battry = {
        basicID: this.basicID,
        tfsize: this.tfsize,
        tfpressure: this.tfpressure,
        tbsize: this.tbsize,
        tbpressure: this.tbpressure
    }

    try {

        var query = "UPDATE  `v_tayar` "
            + " SET `sizefront` = '" + t.tfsize + "',"
            + " `pressurefront` = '" + t.tfpressure + "',"
            + " `sizerear` = '" + t.tbsize + "',"
            + " `pressurerear` = '" + t.tbpressure + "',"
            + " `tstatus` = 1"
            + " WHERE"
            + " `basicinfo_id` = '" + t.basicID + "'";


        db.execute(query, (error, rows, fildData) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log(error);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.getTayer = (req, res, next) => {
    try {
        var quary = "SELECT v_tayar.idTayar,v_tayar.sizefront,v_tayar.pressurefront,v_tayar.sizerear,v_tayar.pressurerear,v_tayar.tstatus,v_tayar.basicinfo_id FROM v_tayar WHERE v_tayar.basicinfo_id = " + req.body.id;
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

