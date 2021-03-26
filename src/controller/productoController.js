const UserModel = require("../models/userModel");

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
    try{
        if (!model.rut && !model.nombre && !model.perfil) {
            res.status(400).send({ message: "Debe completar todos los campos" });
            return;
        }
        const docs = await UserModel.findOne({rut : model.rut}).exec();

        if(!docs){
            
            UserModel.save(model).then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    mensaje: err.message || "Error al ejecutar acción en la base de datos"
                });
            });
        }else {
            res.send({
                mensage : 'Usuario ya se encuentra registrado'
            });
        }
    }catch(e){
        console.log(e);
        res.status(500).send(e);
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
    try{
        if (!model.rut) {
            res.status(400).send({ message: "Debe completar el rut para actualizar" });
            return;
        }

        const filtro = {rut : req.params.rut};
        const user = await UserModel.findOneAndUpdate(filtro, model, {
            new: true
        });
        res.send(user);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
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

    try{
        if (!req.params.rut) {
            res.status(400).send({ message: "Debe completar el rut para poder eliminar" });
            return;
        }

        UserModel.findOneAndRemove({rut : req.params.rut})
            .then(usr => res.send(usr.rut + ' Eliminado'))
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
    filtro[req.params.atr] = 'perfil' === req.params.atr ? parseInt(req.params.valor) : req.params.valor;
    
    try{
        const docs = await UserModel.findOne(filtro).exec();
        if(docs){
            res.send(docs);
        }else {
            res.status(500).send({
                message: err.message || "Usuario no encontrado."
            })
        }
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
}
