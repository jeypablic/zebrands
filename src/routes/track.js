const {Router} = require('express');
const pool = require('../db/config');

const router = Router();

/**
 * @api {get} / Inicio de la API
 * @apiName /tracking
 * @apiGroup Tracking 
 * 
 * 
 * @apiSuccess {String} Mensaje.
 */ 
 router.post('/tracking', (req, res) => {
    pool.query('INSERT INTO tracking SET ?', req.body, (error, result) => {
        if (error) throw error;
 
        res.send(`Tracking success: ${result.insertId}`);
    });
});

 module.exports = router;