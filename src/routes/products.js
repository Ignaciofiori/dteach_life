const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productsController = require('../controllers/productsController');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/uploads'));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

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
