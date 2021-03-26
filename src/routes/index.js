const {Router} = require('express');
const db = require('./../db/database');
const userController = require('./../controller/userController');
const productoController = require('./../controller/userController');
const trackingController = require('./../controller/trackingController');

const router = Router();

router.get('/', (req, res) => res.json({message: 'Hola Mundo'}));
router.post('/usr/add', userController.crear);
router.put('/usr/edit/:rut', userController.editar);
router.delete('/usr/delete/:rut', userController.eliminar);
router.get('/usr/find/:atr/:valor', userController.findBy);

router.post('/product/add', productoController.crear);
router.put('/product/edit/:sku', productoController.editar);
router.delete('/product/delete/:sku', productoController.eliminar);
router.get('/product/find/:atr/:valor', productoController.findBy);

module.exports = router;