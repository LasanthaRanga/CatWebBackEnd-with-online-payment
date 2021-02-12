const express = require('express');
const router = express.Router();
const street = require('../../controllers/online/streetContro');


router.post('/saveStreet', street.saveStreet);
router.post('/getStreet', street.getStreet);

module.exports = router;