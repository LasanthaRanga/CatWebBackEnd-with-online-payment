const db = require('../util/vehicleDB');

exports.getColors = (req, res, next) => {
    try {
        db.execute('SELECT v_color.idV_color,v_color.V_color_name FROM v_color', (error, rows, fildData) => {
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

exports.getCondition = (req, res, next) => {
    try {
        db.execute('SELECT v_condition.idV_condition,v_condition.V_condition_type FROM v_condition', (error, rows, fildData) => {
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

exports.getFuel = (req, res, next) => {
    try {
        db.execute('SELECT v_fuel.idV_Fuel,v_fuel.V_Fuel FROM v_fuel', (error, rows, fildData) => {
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

exports.getMake = (req, res, next) => {
    try {
        db.execute('SELECT v_make.idV_make,v_make.V_make_company FROM v_make', (error, rows, fildData) => {
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

exports.getOilType = (req, res, next) => {
    try {
        db.execute('SELECT v_oil.idV_oil,v_oil.V_oil_type,v_oil.V_oil_typeint,v_oil.V_oil_name FROM v_oil', (error, rows, fildData) => {
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

exports.getOrigin = (req, res, next) => {
    try {
        db.execute('SELECT v_origin.idV_Origin,v_origin.V_Origin_name FROM v_origin', (error, rows, fildData) => {
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


exports.getProvince = (req, res, next) => {
    try {
        db.execute('SELECT v_provincecode.idV_provincecode,v_provincecode.V_provincecode FROM v_provincecode', (error, rows, fildData) => {
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

exports.getTransmition = (req, res, next) => {
    try {
        db.execute('SELECT v_transmision.idV_transmision,v_transmision.V_transmision_name FROM v_transmision', (error, rows, fildData) => {
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

exports.getTypes = (req, res, next) => {
    try {
        db.execute('SELECT v_type.idV_type,v_type.V_type_name FROM v_type', (error, rows, fildData) => {
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


exports.getInsuranceType = (req, res, next) => {
    try {
        db.execute('SELECT insurancetype.idInsuranceType,insurancetype.insuranceType_Name,insurancetype.insuranceType_status FROM insurancetype', (error, rows, fildData) => {
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

exports.getInsurenceCompany = (req, res, next) => {
    try {
        db.execute('SELECT insurencecompany.idInsurenceCompany,insurencecompany.InsurenceCompany_name,insurencecompany.InsurenceCompany_status FROM insurencecompany', (error, rows, fildData) => {
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

exports.getOilTypes = (req, res, next) => {
    try {
        db.execute('SELECT voiltyps.vIdoil,voiltyps.voiltypeId,voiltyps.voilname,voiltyps.voilstatus FROM voiltyps ', (error, rows, fildData) => {
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

exports.getOilNameByType = (req, res, next) => {
    try {
        db.execute('SELECT voiltyps.vIdoil,voiltyps.voiltypeId,voiltyps.voilname,voiltyps.voilstatus FROM voiltyps WHERE voiltyps.voiltypeId=' + req.body.id, (error, rows, fildData) => {
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