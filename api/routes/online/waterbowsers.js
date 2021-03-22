const express = require('express');
const router = express.Router();
const waterbowser = require('../../controllers/online/waterbowsersContro');

router.post('/savegdetails', waterbowser.savegdetails);
router.post('/gettype', waterbowser.gettype);
router.post('/getuserpending', waterbowser.getuserpending);
router.post('/moredetails_by_id',waterbowser.moredetails_by_id);
router.post('/getallpending',waterbowser.getallpending);
router.post('/allappbyid',waterbowser.allappbyid);
router.post('/w_addpay',waterbowser.w_addpay);
router.post('/savepaydetail',waterbowser.savepaydetail);
module.exports = router;