const {Router} = require('express');
const pool = require('../db/config');

const router = Router();

/**
 * @api {get} / Inicio de la API
 * @apiName /products
 * @apiGroup Product 
 * 
 * 
 * @apiSuccess {String} Mensaje.
 */ 
 router.get('/products', (req, res) => {
    pool.query('SELECT * FROM product', (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
 });

 /**
 * @api {get} / Inicio de la API
 * @apiName / 
 * @apiGroup Product 
 * 
 * 
 * @apiSuccess {String} Mensaje.
 */ 
  router.get('/product/:sku', (req, res) => {

    const sku = req.params.sku;
    pool.query('SELECT * FROM product WHERE sku = ?', sku, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
 });

 /**
 * @api {get} / Inicio de la API
 * @apiName / 
 * @apiGroup Product 
 * 
 * 
 * @apiSuccess {String} Mensaje.
 */ 
  router.post('/product/add', (req, res) => {
    pool.query('INSERT INTO product SET ?', req.body, (error, result) => {
        if (error) throw error;
 
        res.status(201).send(`User added with ID: ${result.insertId}`);
    });
});

/**
 * @api {get} / Inicio de la API
 * @apiName / 
 * @apiGroup Product 
 * 
 * 
 * @apiSuccess {String} Mensaje.
 */ 
 router.put('/product/edit/:id', (req, res) => {
    const id = req.params.id;
    pool.query('UPDATE product SET ? WHERE id = ?', [req.body, id], (error, result) => {
        if (error) throw error;
 
        res.send('User updated successfully.');
    });
});

/**
 * @api {get} / Inicio de la API
 * @apiName / 
 * @apiGroup Product 
 * 
 * 
 * @apiSuccess {String} Mensaje.
 */ 
router.delete('/product/delete/:id', (req, res) => {
    const id = req.params.id;
 
    pool.query('DELETE FROM product WHERE id = ?', id, (error, result) => {
        if (error) throw error;
 
        res.send('User deleted.');
    });
});

module.exports = router;