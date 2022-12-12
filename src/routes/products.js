const express = require('express');
const router = express.Router();;
const productsController = require('../controllers/productsController');

//MIDDLEWARES 
const upload= require("../middlewares/productMulterMiddleware")

router.get('/', productsController.index);
router.get('/detail/:id', productsController.detail);
router.get('/cart', productsController.cart);
router.get('/create', productsController.createForm);
router.post(
  '/create',
  upload.single('imagenProducto'),
  productsController.create
);
router.get('/edit/:id', productsController.editForm);
router.put(
  '/edit/:id',
  upload.single('imagenProducto'),
  productsController.edit
);
router.delete('/delete/:id', productsController.delete);

module.exports = router;
