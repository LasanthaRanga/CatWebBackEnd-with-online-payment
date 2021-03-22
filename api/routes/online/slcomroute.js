const express = require('express');
const router = express.Router();
const slcom = require('../../controllers/online/slcom');


router.post('/saveslcom', slcom.saveslcom);
//router.post('/getStreet', street.getStreet);

module.exports = router;