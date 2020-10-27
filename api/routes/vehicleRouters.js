var express = require('express');
var router = express.Router();
const vehicleBasic = require('../controllers/vehicleBasic');
const comboData = require('../controllers/comboData');
/* GET home page. */

router.post("/getAllVehicles", vehicleBasic.getAllVehicles);
router.post("/getAllVehicleById", vehicleBasic.getAllVehicleById);

router.post("/saveBasic", vehicleBasic.saveBasic);
router.post("/updateBasic", vehicleBasic.updateBasic);
router.post("/getBasic", vehicleBasic.getBasic);

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


module.exports = router;