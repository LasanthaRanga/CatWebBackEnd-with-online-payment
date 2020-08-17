const express = require('express');
const router = express.Router();

router.get('/',(req, res, nex)=>{
    res.status(200).json({
        message: 'Oders Ger Request to products'
    });
});

router.post('/',(req, res, nex)=>{
    const oder = {
        productId: req.body.productId,
        quantity: req.body.quantity

    }
    res.status(200).json({
        message: 'Oders Ger Request to products',
        oder: oder
    });
});

module.exports = router;
