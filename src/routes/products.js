const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.index);
router.get('/:id/detail', productsController.detail);
router.get('/cart', productsController.cart);
router.get('/create', productsController.createForm);
router.post('/create', productsController.create);
router.get('/:id/edit', productsController.editForm);
router.put('/:id/edit', productsController.edit);

module.exports = router;
