const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.index);
router.get('/detail/:id', productsController.detail);
router.get('/cart', productsController.cart);
router.get('/create', productsController.createForm);
router.post('/create', productsController.create);
router.get('/edit/:id', productsController.editForm);
router.put('/edit/:id', productsController.edit);
router.delete('/delete/:id', productsController.delete);

module.exports = router;
