const express = require('express');
const router = express.Router();
const gully = require('../../controllers/online/gullyContro');


router.post('/savegdetails', gully.savegdetails);
router.post('/getnatures', gully.getnatures);
router.post('/getpendinglist',gully.getpendinglist);
router.post('/moreinfo',gully.moreinfo);
router.post('/getallpendinglist',gully.getallpendinglist);
router.post('/addamount',gully.addamount);
router.post('/savepaydetail',gully.savepaydetail);
router.post('/getpaymentforcus',gully.getpaymentforcus);
router.post('/getpayment_detail_by_id',gully.getpayment_detail_by_id);
router.post('/getbankrate',gully.getbankrate);
router.post('/pay',gully.pay);
router.post('/responce',gully.responce);
router.post('/update_payment_status',gully.update_payment_status);
router.post('/cusdata',gully.cusdata);
module.exports = router;