const UserModel = require("./../models/userModel");

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
        let user = await UserModel.findOne({rut : model.rut}).exec();
        if(!user){
            const user = new UserModel(model);
            await user.save();
            const token = await user.generateAuthToken()
            res.status(201).send({ user, token })
        }else {
            res.status(500).send("Usuario ya se encuentra registrado.");
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
    if(req.user.perfil && req.user.perfil !== 1){
        res.status(401).send({ message: 'No tiene autorización para ejecutar la acción'});    
    }
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
    
    if(req.user.perfil && req.user.perfil !== 1){
        res.status(401).send({ message: 'No tiene autorización para ejecutar la acción'});    
    }
    
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

exports.login = async (req, res) => {
    console.log('login');
    try {
        const { email, password } = req.body
        const user = await UserModel.findByCredentials(email, password)
        if (!user) {
           return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
     } catch (error) {
        res.status(400).send(error)
     }
}

exports.logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.findAll = async (req, res) => {
    try{
        const usuarios = await UserModel.find({}).exec();
        res.send(usuarios);
    }catch(e){
        console.log(e);
        res.status(500).send(e.message);
    }
}
