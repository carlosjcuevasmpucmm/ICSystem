
// Para el manejo de las rutas y los controladores con los metodos
const express = require('express');
const router = express.Router();
const ordersPackController = require('../app/api/controllers/ordersPack');

//Rutas para ordersPack
router.get('/', ordersPackController.getAll);
router.post('/', ordersPackController.create);
router.get('/:ordersPackId', ordersPackController.getById);
router.put('/:ordersPackId', ordersPackController.updateById);
router.delete('/:ordersPackId', ordersPackController.deleteById);

module.exports = router;