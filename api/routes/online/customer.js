const express = require('express');
const router = express.Router();
const cusContro = require('../../controllers/online/customerContro');



const message = "Registration Success in MC Kurunegala. Youre Verification code is : ";


router.post('/conferm', cusContro.conferm);
router.post('/', cusContro.newCus);
router.get('/', cusContro.getDip);




module.exports = router;