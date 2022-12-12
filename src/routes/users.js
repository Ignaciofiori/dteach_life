const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();
const {body}= require('express-validator');
const path = require('path')
  
//MIDDLEWARES 
const uploadFile = require("../middlewares/userMulterMiddleware")



  const validaciones = [
    body('nombre').notEmpty().withMessage('falta el Nombre'),
    body('apellido').notEmpty().withMessage('falta el Apellido'),
    body('ubicacion').notEmpty().withMessage('falta la ubicación'),
    body('email')
      .notEmpty().withMessage('falta el email').bail()
      .isEmail().withMessage('tiene que ser un mail'),

    body('password').notEmpty().withMessage('falta el password'),
    body('imagenUsuario').custom((value,{req}) =>{
    let file = req.file;
    
    let acceptedExtensions = ['.jpg','.png','.gif'];
    if(!file){
      
      throw new Error('tiene que subir una imagen');
    }else{
      
      let fileExtension = path.extname(file.originalname)
      console.log(fileExtension)
      if(!acceptedExtensions.includes(fileExtension)){
      throw new Error ('Las extensiones nos compatibles loco')
    }}
      return true;
    })]



router.get("/",usersController.index);
router.get('/login', usersController.login)
router.get('/register', usersController.register)
router.post("/register",uploadFile.single('imagenUsuario'),validaciones ,usersController.createUser)

module.exports = router