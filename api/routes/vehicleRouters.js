var express = require('express');
var router = express.Router();
const db = require('../util/vehicleDB');
var appRoot = require('app-root-path');
var dateFormat = require('dateformat');
const vehicleBasic = require('../controllers/vehicleBasic');
const comboData = require('../controllers/comboData');
const tools = require('../controllers/vehicleTools');
const fuelC = require('../controllers/vehicleFuelC');
const license = require('../controllers/vehicleLicense');
const tyre = require('../controllers/vehicleTyre');
const replace = require('../controllers/vehicleReplace');
const driver = require('../controllers/vehicleDriver');
const service = require('../controllers/vehicleService');


//file upload
let path = '';

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/vehicle/');
    },
    filename: function (req, file, cb) {
        let date = dateFormat(new Date(), 'yyyyMMddHHmmss_', 'en-US', '+0530');
        // console.log(date + " ===================== ");
        path = date + file.originalname;
        // console.log(path + "  ++++++++++++++++++");
        cb(null, path);
    }
});
const upload = multer({ storage: storage });

router.post('/upload', upload.single('attach'), (req, res, nex) => {
    console.log("awa");
    console.log(req.file);
    console.log(req.body.type);
    const body = { basicID: req.body.basicID }
    console.log(body);
    console.log(path);

    db.execute("INSERT INTO `v_images`(`V_images_path`, `V_images_status`, `V_Basicinfo_idV_Basicinfo`) VALUES ('" + path + "', '1', " + body.basicID + ")",
        (error, rows, fildData) => {
            if (!error) {
                console.log(path);
                res.send({ mg: 'Ok', status: 1 });
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
    // res.send({ ok: "Ela Ban OK" });
});


router.get('/img/:path', (req, res, nex) => {
    var path = req.params.path;
    console.log(appRoot);
    res.sendFile(appRoot + '/uploads/vehicle/' + path);
});

router.get('/image/:id', (req, res, nex) => {
    var id = req.params.id;
    db.execute("SELECT v_images.V_images_path,v_images.idV_images FROM v_images WHERE v_images.V_Basicinfo_idV_Basicinfo =" + id,
        (error, rows, next) => {
            if (!error) {
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});




//routers
router.post("/getAllVehicles", vehicleBasic.getAllVehicles);
router.post("/getAllVehicleById", vehicleBasic.getAllVehicleById);

router.post("/saveBasic", vehicleBasic.saveBasic);
router.post("/updateBasic", vehicleBasic.updateBasic);
router.post("/getBasic", vehicleBasic.getBasic);
router.post("/getNumber", vehicleBasic.getNumber);

router.post("/saveOil", vehicleBasic.saveOil);
router.post("/getOil", vehicleBasic.getOil);

router.post("/saveEngin", vehicleBasic.saveEngin);
router.post("/getEngin", vehicleBasic.getEngin);


router.post("/saveBattry", vehicleBasic.saveBattry);
router.post("/getBattry", vehicleBasic.getBattry);


router.post("/saveTayer", vehicleBasic.saveTayer);
router.post("/getTayer", vehicleBasic.getTayer);



// ================ combo load
router.post("/getColors", comboData.getColors);
router.post("/getCondition", comboData.getCondition);
router.post("/getFuel", comboData.getFuel);
router.post("/getMake", comboData.getMake);
router.post("/getOrigin", comboData.getOrigin);
router.post("/getOilType", comboData.getOilType);
router.post("/getProvince", comboData.getProvince);
router.post("/getTransmition", comboData.getTransmition);
router.post("/getTypes", comboData.getTypes);
router.post("/getInsuranceType", comboData.getInsuranceType);
router.post("/getInsurenceCompany", comboData.getInsurenceCompany);
router.post("/getOilTypes", comboData.getOilTypes);
router.post("/getOilNameByType", comboData.getOilNameByType); // (id)

//toosl 
router.post("/saveTools", tools.saveTools);
router.post("/getTools", tools.getTools);
router.post("/deactiveTools", tools.deactiveTools);

//fuelC
router.post("/saveFuelc", fuelC.saveFuelc);
router.post("/getFuelc", fuelC.getFuelc);
router.post("/deactiveFuelc", fuelC.deactiveFuelc);

//license
router.post("/getLicenseTypes", license.getLicenseTypes);
router.post("/getLicenseAuthority", license.getLicenseAuthority);
router.post("/saveLicense", license.saveLicense);
router.post("/getLicens", license.getLicens);
router.post("/deactiveLicense", license.deactiveLicense);


// tayer 
router.post("/getTyreSize", tyre.getTyreSize);
router.post("/getWheel", tyre.getWheel);
router.post("/getTyres", tyre.getTyres);
router.post("/saveTyre", tyre.saveTyre);
router.post("/deactiveTyre", tyre.deactiveTyre);


//Replace
router.post("/getReplace", replace.getReplace);
router.post("/getParts", replace.getParts);
router.post("/saveReplace", replace.saveReplace);
router.post("/deactiveReplace", replace.deactiveReplace);


//Driver
router.post("/getDrivers", driver.getDrivers);
router.post("/saveDriver", driver.saveDriver);
router.post("/getVehicleDriver", driver.getVehicleDriver);
router.post("/deactiveDriver", driver.deactiveDriver);

//Service
router.post("/getServiceTypes", service.getServiceTypes);
router.post("/saveService", service.saveService);
router.post("/getServices", service.getServices);
router.post("/getServiceOils", service.getServiceOils);


module.exports = router;