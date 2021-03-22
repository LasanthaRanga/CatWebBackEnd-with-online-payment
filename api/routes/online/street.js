const express = require('express');
const router = express.Router();
const street = require('../../controllers/online/streetContro');


router.post('/saveStreet', street.saveStreet);
router.post('/getStreet', street.getStreet);
router.post('/ss', street.getsearchcustbl);
router.post('/getSt', street.getsearchstreetlinetbl);
router.post('/getref', street.getrefno);
router.post('/getrefid', street.getrefid);
router.post('/getslid', street.getslid);
router.post('/getoldsl', street.getoldsldetails);

module.exports = router;