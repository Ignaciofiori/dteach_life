const express = require('express');
 const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const path = require('path');
const validacionesProductos = require("../middlewares/validacionesProductosMiddlewares")
const authMiddleware = require('../middlewares/authMiddleware');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/uploads'));
    },
    filename: function (req, file, cb) {
      let nombreArchivo =  Date.now() +'imagenProducto' +path.extname(file.originalname);
        cb(
        null,nombreArchivo
        );
    },
  });
  
  const upload = multer({ storage: storage });


router.get('/', productsController.index);
router.get('/detail/:id', productsController.detail);
router.get('/cart', productsController.cart);
router.get('/create',authMiddleware, productsController.createForm);
router.post('/create',upload.single("imagen"),validacionesProductos,productsController.create);
router.get('/edit/:id', productsController.editForm);
router.put('/edit/:id', upload.single("imagen"),validacionesProductos,productsController.edit);
router.delete('/delete/:id', productsController.delete);

 module.exports = router;
