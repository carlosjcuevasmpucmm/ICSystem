


// Para el manejo de las rutas y los controladores con los metodos
const express = require('express');
const router = express.Router();
const orderController = require('../app/api/controllers/order');

//Rutas de ordenes
router.post('/', orderController.create);
router.get('/', orderController.getAll);
router.get('/:orderId', orderController.getById);
router.delete('/:orderId', orderController.deleteById);
router.put('/:orderId', orderController.updateById);



module.exports = router;