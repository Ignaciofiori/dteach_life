const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {body}= require('express-validator');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/images/users'));
    },
    filename: function (req, file, cb) {
      let nombreArchivo =  Date.now() +'imguser' +path.extname(file.originalname);
        cb(
        null,      
        nombreArchivo
        );
    },
  });
  
  const uploadFile = multer({ storage: storage });
  

  const validaciones = [
    body('nombre').notEmpty().withMessage('falta el Nombre'),
    body('apellido').notEmpty().withMessage('falta el Apellido'),
    body('ubicacion').notEmpty().withMessage('falta la ubicación'),
    body('email').notEmpty().withMessage('falta el email'),
    body('password').notEmpty().withMessage('falta el password'),
  ]



router.get("/",usersController.index);
router.get('/login', usersController.login)
router.get('/register', usersController.register)
router.post("/register",uploadFile.single('imagenUsuario'),validaciones,usersController.createUser)

module.exports = router