const express = require('express');
const router = express.Router();
const payContro = require('../../controllers/online/payContro');


router.post('/rate', payContro.rate);
router.post('/disabled', payContro.disabled);
router.post('/pay', payContro.pay);
router.post('/responce', payContro.responce);
module.exports = router;