const express = require('express');
const router = express.Router();
const complain = require('../../controllers/online/complains');


router.post('/savecomplain',complain.savecomplain )
router.post('/allcomplain',complain.allcomplain )
router.post('/complain_by_user', complain.complain_by_user);

module.exports = router;