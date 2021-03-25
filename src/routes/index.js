const {Router} = require('express');
const mongoose = require('mongoose');

const pool = require('./../db/database');
const ProductModel = require('./../models/productModel');

const router = Router();

/**
 * @api {get} / Inicio de la API
 * @apiName / 
 * @apiGroup Usuario 
 * 
 * 
 * @apiSuccess {String} Mensaje.
 */ 
router.get('/', (req, res) => res.json({message: 'Hola Mundo'}));

router.get('/test/:id/:nombre/:mark', (req, res) => {
        
    // a document instance
    var book1 = new ProductModel({ 
        sku: req.params.id, 
        name:req.params.nombre, 
        price: 10, mark: req.params.mark 
    });

    // save model to database
    book1.save(function (err, book) {
        if (err) return console.error(err);
        console.log(book.name + " saved to bookstore collection.");
        res.send(book);
    });
})

/**
 * @api {get} / Inicio de la API
 * @apiName / 
 * @apiGroup Usuario 
 * 
 * 
 * @apiSuccess {String} Mensaje.
 */ 
 router.get('/product/add', (req, res) => {
     res.json({message: 'Hola Mundo'});
 });

 /**
 * @api {get} / Inicio de la API
 * @apiName / 
 * @apiGroup Usuario 
 * 
 * 
 * @apiSuccess {String} Mensaje.
 */ 
  router.get('/product/edit', (req, res) => res.json({message: 'Hola Mundo'}));

  /**
 * @api {get} / Inicio de la API
 * @apiName / 
 * @apiGroup Usuario 
 * 
 * 
 * @apiSuccess {String} Mensaje.
 */ 
 router.get('/product/delete/:id', (req, res) => res.json({message: 'Hola Mundo'}));

module.exports = router;