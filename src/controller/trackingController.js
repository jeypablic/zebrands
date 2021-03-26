const TrackingModel = require('../models/trackingModel');

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
    var tracking = new TrackingModel({ 
        nombre: req.body.nombre, 
        codigo:req.body.codigo, 
        sku: req.body.sku
    });

    tracking.save(function (err, item) {
        if (err) return console.error(err);
        res.send({menssage : 'Tracking acction success'});
    });
}
