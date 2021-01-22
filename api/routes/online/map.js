const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');
const mapContro = require('../../controllers/online/mapContro');

router.post('/map', mapContro.map);
router.post('/prop', mapContro.prop);
router.post('/allprop', mapContro.allprop);
router.post('/selectedMap', mapContro.selectedMap);
router.post('/approve', mapContro.approve);

module.exports = router;