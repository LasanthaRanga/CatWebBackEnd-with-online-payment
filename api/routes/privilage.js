const express = require('express');
const router = express.Router();
const db = require('../util/database');


router.post('/add', (req, res, nex) => {
    const body = { idcat: req.body.idcat, idprv: req.body.idprv }
    db.execute("SELECT web_priv_has_approve_cat.idWeb_priv_has_approve_cat FROM web_priv_has_approve_cat WHERE web_priv_has_approve_cat.web_priv_id = " + body.idprv + " AND web_priv_has_approve_cat.approve_cat_id = " + body.idcat,
        (error, rows, fildData) => {
            if (!error) {
                console.log(rows);
                if (rows[0] == null) {
                    db.execute("INSERT INTO `web_priv_has_approve_cat` ( `web_priv_id`, `approve_cat_id` ) VALUES ('" + body.idprv + "', '" + body.idcat + "')", (er, ro, fi) => {
                        if (!er) {
                            res.status(200);
                            res.send({ mg: "Ok" });
                        }
                    });
                } else {
                    res.status(200);
                    res.send({ mg: "exsist" });
                }
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});

router.post('/remove', (req, res, nex) => {
    const body = { idcat: req.body.idcat, idprv: req.body.idprv }
    db.execute("DELETE from web_priv_has_approve_cat WHERE web_priv_id = " + body.idprv + " and approve_cat_id = " + body.idcat,
        (error, rows, fildData) => {
            if (!error) {
                res.status(200);
                res.send({ mg: "Ok" });

            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});

router.post('/', (req, res, nex) => {
    const body = { id: req.body.id }
    db.execute("SELECT 	id,	routerLink,	caption,	image,	STATUS,	approval_cat.idApproval_cat,	user_has_approval_cat.User_idUser FROM	approval_cat	INNER JOIN web_priv_has_approve_cat ON web_priv_has_approve_cat.approve_cat_id = approval_cat.idApproval_cat	INNER JOIN web_privilages ON web_priv_has_approve_cat.web_priv_id = id	INNER JOIN user_has_approval_cat ON user_has_approval_cat.Approval_cat_idApproval_cat = approval_cat.idApproval_cat WHERE	user_has_approval_cat.User_idUser =" + body.id,
        (error, rows, fildData) => {
            if (!error) {
                res.status(200);
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});


router.get('/aprovalcat', (req, res, nex) => {
    db.execute("SELECT approval_cat.idApproval_cat, approval_cat.approval_name FROM approval_cat WHERE status_app_cat=1 ",
        (error, rows, fildData) => {
            if (!error) {
                res.status(200);
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});

router.get('/privilages', (req, res, nex) => {
    db.execute("SELECT web_privilages.id, web_privilages.caption, web_privilages.image FROM web_privilages WHERE `status` = 1",
        (error, rows, fildData) => {
            if (!error) {
                res.status(200);
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});


router.get('/apcathas/:id', (req, res, nex) => {
    let id = req.params.id;
    db.execute("SELECT web_privilages.id, web_privilages.caption, web_privilages.image FROM web_priv_has_approve_cat INNER JOIN web_privilages ON web_priv_has_approve_cat.web_priv_id = web_privilages.id INNER JOIN approval_cat ON web_priv_has_approve_cat.approve_cat_id = approval_cat.idApproval_cat WHERE approval_cat.idApproval_cat =" + id,
        (error, rows, fildData) => {
            if (!error) {
                res.status(200);
                res.send(rows);
            } else {
                console.log("error message");
                console.log(error.message);
            }
        });
});



router.get('/:productId', (req, res, nex) => {

});

router.patch('/:productId', (req, res, nex) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'Updated Product',
        id: id
    });

});







router.delete('/:productId', (req, res, nex) => {

});


module.exports = router;
