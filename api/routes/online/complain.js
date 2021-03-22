const express = require('express');
const router = express.Router();
const complain = require('../../controllers/online/complains');


router.post('/savecomplain',complain.savecomplain )
router.post('/allcomplain',complain.allcomplain )
//router.post('/saveslcom', slcom.saveslcom);

module.exports = router;