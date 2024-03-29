const express = require('express');
const router = express.Router();
const cusContro = require('../../controllers/online/customerContro');

const message =
  'Registration Success in MC Kurunegala. Youre Verification code is : ';

router.post('/conferm', cusContro.conferm);
router.post('/', cusContro.newCusSql);
router.get('/', cusContro.getDip);
router.post('/getVerification', cusContro.getVerification);
router.post('/recover', cusContro.recover);
router.post('/reset', cusContro.reset);

module.exports = router;
