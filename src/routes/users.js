const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const multer = require('multer');
const path = require('path');
const usersController = require('../controllers/usersController');
const { body } = require('express-validator');

// Configuracion de Multer
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

//Validaciones de formularios
const validateRegisterForm = [
  body('nombre').notEmpty().withMessage('Nombre es obligatorio.'),
  body('apellido').notEmpty().withMessage('Apellido es obligatorio.'),
  body('ubicacion').notEmpty().withMessage('Ubicacion obligatorio.'),
  body('email')
    .notEmpty()
    .withMessage('Email es obligatorio.')
    .bail()
    .isEmail()
    .withMessage('Ingresar email valido.'),
  body('password')
    .notEmpty()
    .withMessage('Password es obligatorio.')
    .bail()
    .isLength({ min: 6 })
    .withMessage('La clave debe tener minimo 6 caracteres.'),
];

// router.get('/:id', usersController.profile);
router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.post(
  '/register',
  upload.single('imagen'),
  validateRegisterForm,
  usersController.createUser
);
// router.get('/edit/:id', usersController.profile);
// router.put(
//   '/edit/:id',
//   validateRegisterForm,
//   upload.single('imagen'),
//   usersController.index
// );
// router.delete('/delete/:id', usersController.profile);

module.exports = router;
=======
const path = require('path')
const {body}= require('express-validator');
  
//MIDDLEWARES 
const uploadFile = require("../middlewares/userMulterMiddleware")
const validaciones = require("../middlewares/validacionesRegisterMiddleware")
const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")
router.get("/",usersController.index);
router.get('/login',guestMiddleware ,usersController.login)
router.get('/register', guestMiddleware, usersController.register)
router.post("/register",uploadFile.single('imagenUsuario'),validaciones ,usersController.createUser)
router.post("/login",usersController.loginProcess)
router.get("/profile",authMiddleware,usersController.profile)
router.get("/logout",usersController.logout)
module.exports = router
>>>>>>> a5495fe62cb799f9fc1dd41bdf2bf45c9f228004
