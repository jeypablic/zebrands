const ProductoModel = require("../models/productModel");

/**
 * @api {post} /add Registrar un Usuario
 * @apiVersion 0.0.1
 * @apiName Usuario
 * @apiGroup Usuario
 * @apiPermission none
 *
 * @apiDescription Se encarga de registrar un usuario del sistema.
 *
 * @apiQuery {String} rut Rut del usuario
 * @apiQuery {String} nombre Nombre del usuario
 * @apiQuery {Number} perfil Perfil del usuario
 *
 * @apiSuccess {String} message Mensaje de la ejecución
 *
 */
exports.crear = async (req, res) => {

    const model = req.body;
    
    if(req.user.perfil && req.user.perfil !== 1){
        res.status(401).send({ message: 'No tiene autorización para ejecutar la acción'});    
    }
    
    try{
        const docs = await ProductoModel.findOne({sku : model.sku}).exec();

        if(!docs){
            ProductoModel.save(model).then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    mensaje: err.message || 'Error al intentar guardar el producto'
                });
            });
        }else {
            res.send({
                mensage : 'Producto ya se encuentra registrado'
            });
        }
    }catch(e){
        console.log(e);
        res.status(500).send(e.message);
    }
}

/**
 * @api {post} /edit Editar un Usuario
 * @apiVersion 0.0.1
 * @apiName Usuario
 * @apiGroup Usuario
 * @apiPermission none
 *
 * @apiDescription Se encarga de editar un usuario del sistema.
 *
 * @apiQuery {String} rut Rut del usuario
 * @apiQuery {String} nombre Nombre del usuario
 * @apiQuery {Number} perfil Perfil del usuario
 *
 * @apiSuccess {String} message Mensaje de la ejecución
 *
 */
 exports.editar = async (req, res) => {

    const model = req.body;

    if(req.user.perfil && req.user.perfil !== 1){
        res.status(401).send({ message: 'No tiene autorización para ejecutar la acción'});    
    }
    
    try{
        if (!req.params.sku) {
            res.status(401).send({ message: "Debe completar el sku para poder editar" });
            return;
        }

        const filtro = {sku : req.params.sku};
        const producto = await ProductoModel.findOneAndUpdate(filtro, model, {
            new: true
        });
        res.send(producto);
    }catch(e){
        console.log(e);
        res.status(500).send(e.message);
    }
}

/**
 * @api {post} /add Registrar un Usuario
 * @apiVersion 0.0.1
 * @apiName Usuario
 * @apiGroup Usuario
 * @apiPermission none
 *
 * @apiDescription Se encarga de registrar un usuario del sistema.
 *
 * @apiQuery {String} rut Rut del usuario
 * @apiQuery {String} nombre Nombre del usuario
 * @apiQuery {Number} perfil Perfil del usuario
 *
 * @apiSuccess {String} message Mensaje de la ejecución
 *
 */
 exports.eliminar = (req, res) => {
    
    if(req.user.perfil && req.user.perfil !== 1){
        res.status(401).send({ message: 'No tiene autorización para ejecutar la acción'});    
    }
    
    try{
        if (!req.params.sku) {
            res.status(401).send({ message: "Debe completar el sku para poder eliminar" });
            return;
        }

        ProductoModel.findOneAndRemove({sku : req.params.sku})
            .then(prod => res.send(prod.sku + ' Eliminado'))
            .catch(err => res.json(err));
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
}

/**
 * @api {post} /findBy Busca un Usuario
 * @apiVersion 0.0.1
 * @apiName Usuario
 * @apiGroup Usuario
 * @apiPermission none
 *
 * @apiDescription Se encarga de buscar un usuario por algun parametro indicado
 *
 * @apiQuery {String} rut Rut del usuario
 * @apiQuery {String} nombre Nombre del usuario
 * @apiQuery {Number} perfil Perfil del usuario
 *
 * @apiSuccess {String} message Mensaje de la ejecución
 *
 */
exports.findBy = async (req, res) => {
    
    let filtro = {};
    filtro[req.params.atr] = 'precio' === req.params.atr ? parseInt(req.params.valor) : req.params.valor;
    
    try{
        const docs = await ProductoModel.findOne(filtro).exec();
        if(docs){
            res.send(docs);
        }else {
            res.status(500).send({
                message: err.message || "Proucto no encontrado."
            })
        }
    }catch(e){
        console.log(e);
        res.status(500).send(e.message);
    }
}

exports.findAll = async (req, res) => {
    try{
        const productos = await ProductoModel.find({}).exec();
        res.send(productos);
    }catch(e){
        console.log(e);
        res.status(500).send(e.message);
    }
}
