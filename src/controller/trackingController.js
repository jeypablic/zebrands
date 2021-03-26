const {Router} = require('express');
const mongoose = require('mongoose');
const pool = require('../db/database');
const TrackingModel = require('../models/trackingModel');

const router = Router();

/**
 * @apiDefine Tracking Tracking
 *
 * API necesaria para registrar eventos.
 */

/**
 * @api {post} /tracking Registrar un evento
 * @apiVersion 0.0.1
 * @apiName Tracking
 * @apiGroup Tracking
 * @apiPermission none
 *
 * @apiDescription Se encarga de registrar una accion ejecutada en el sistema.
 *
 * @apiQuery {String} name Nombre accion
 * @apiQuery {String} action Accion ejecutada
 * @apiQuery {Number} product Id del producto
 *
 * @apiSuccess {String} message Mensaje de la ejecución
 *
 */

 exports.tracking = (req, res) => {
  
};

 router.post('/tracking', (req, res) => {
    var tracking = new TrackingModel({ 
        name: req.body.name, 
        action:req.body.action, 
        product: req.body.product
    });

    tracking.save(function (err, item) {
        if (err) return console.error(err);
        res.send({menssage : 'Tracking acction success'});
    });
});

/**
 * @api {post} /user Create a new User
 * @apiVersion 0.0.1
 * @apiName PostUser
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription In this case "apiErrorStructure" is defined and used.
 * Define blocks with params that will be used in several functions, so you dont have to rewrite them.
 *
 * @apiQuery {String} name Name of the User.
 *
 * @apiBody {String} age Age of the User
 *
 * @apiSuccess {Number} id         The new Users-ID.
 *
 * @apiUse Tracking
 */
 router.post('/tracking', (req, res) => {
    var tracking = new TrackingModel({ 
        name: req.body.name, 
        action:req.body.action, 
        product: req.body.product
    });

    tracking.save(function (err, item) {
        if (err) return console.error(err);
        res.send({menssage : 'Tracking acction success'});
    });
});

 module.exports = router;