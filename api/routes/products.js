const express = require('express');
const router = express.Router();
const db = require('../util/database');

router.get('/',(req, res,next)=>{    
    // db.execute("SELECT EmpID, Name  FROM employee", (error, rows, fildData)=>{  
    //     if(!error){    
    //     res.send(rows);
    //     }else{
    //         console.log(error);
    //     }    
    // }); 
});

router.post('/',(req, res, nex)=>{
    const product ={name: req.body.Name}
    // db.execute("INSERT INTO employee(Name) VALUES ('"+product.name+"');", (error, rows, fildData)=>{  
    //     if(!error){    
    //         res.send({mg: "OK"});
    //     }else{
    //         console.log("error message");
    //         console.log(error.message);
    //     }    
    // }); 
});

router.get('/:productId',(req, res, nex)=>{
    const id = req.params.productId;
    // db.execute("SELECT EmpID, Name, EmpCode, Salary FROM employee WHERE EmpID = "+id, (error, rows, fildData)=>{  
    //     if(!error){    
    //   res.send(rows);
    //     }else{
    //         console.log(error);
    //     }    
    // }); 
});

router.patch('/:productId',(req, res, nex)=>{
    const id = req.params.productId;   
        res.status(200).json({
            message: 'Updated Product',
            id: id        
        });  
   
});

//router.delete('/:productId',(req, res, nex)=>{
//     db.execute("SELECT EmpID, Name, EmpCode, Salary FROM employee", (error, rows, fildData)=>{  
//         if(!error){    
//       res.send(rows);
//         }else{
//             console.log(error);
//         }    
//     }); 
// });
module.exports = router;
