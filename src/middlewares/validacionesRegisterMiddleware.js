const path= require("path")
const {body}= require('express-validator');

const validaciones = [
  body('nombre').notEmpty().withMessage('El Nombre es obligatorio'),
  body('apellido').notEmpty().withMessage('El Apellido es obligatorio'),
  body('ubicacion').notEmpty().withMessage('La ubicación es obligatoria'),
  body('email')
    .notEmpty().withMessage('El Email es obligatorio').bail()
    .isEmail().withMessage('tiene que ser un mail'),
body("descripcion").notEmpty().withMessage("La Descripcion es obligatoria"),
  body('password').notEmpty().withMessage('La Contraseña es obligatoria'),
  body('imagen').custom((value,{req}) =>{
  let file = req.file;
  
  let acceptedExtensions = ['.jpg','.png','.gif',".jpeg"];
  if(!file){
    
    throw new Error('Tienes que subir una imagen');
  }else{
    
    let fileExtension = path.extname(file.originalname)
    console.log(fileExtension)
    if(!acceptedExtensions.includes(fileExtension)){
    throw new Error ('Las extensiones no compatibles')
  }}
    return true;
  })]

  module.exports = validaciones