const express = require('express');
const router = express.Router();
const orderController = require('../app/api/controllers/order');
router.get('/', orderController.getAll);

router.post('/', orderController.create);
router.delete('/:movieId', orderController.deleteById);

module.exports = router;