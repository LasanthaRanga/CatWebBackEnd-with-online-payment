const express = require('express');
const router = express.Router();
const db = require('../util/database');



router.post('/',(req, res, nex)=>{ 
    console.log(req.body.type); 
    const body ={type: req.body.type}    
    db.execute("", 
    (error, rows, fildData)=>{  
        if(!error){
            res.send({mg: 'Ok',status: 1});
        }else{
            console.log("error message");
            console.log(error.message);
        }    
    }); 
});

router.get('/',(req, res, nex)=>{
    db.execute("SELECT idDipartment, dip_name, dip_head, dip_status, dip_syn FROM dipartment", 
    (error, rows, fildData)=>{  
        if(!error){
            res.send(rows);
        }else{
            console.log("error message");
            console.log(error.message);
        }    
    });     
});


router.patch('/:productId',(req, res, nex)=>{
    const id = req.params.productId;   
        res.status(200).json({
            message: 'Updated Product',
            id: id        
        });  
   
});

router.delete('/:productId',(req, res, nex)=>{
    
});


module.exports = router;
