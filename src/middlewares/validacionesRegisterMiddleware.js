const {body}= require('express-validator');

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
  
  let acceptedExtensions = ['.jpg','.png','.gif',".jpeg"];
  if(!file){
    
    throw new Error('tiene que subir una imagen');
  }else{
    
    let fileExtension = path.extname(file.originalname)
    console.log(fileExtension)
    if(!acceptedExtensions.includes(fileExtension)){
    throw new Error ('Las extensiones no compatibles loco')
  }}
    return true;
  })]

  module.exports = validaciones