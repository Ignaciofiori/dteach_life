const path= require("path")
const {body}= require('express-validator');

const validaciones = [
  body('nombre').isLength({ min: 2 }).withMessage("El Nombre debe tener almenos 2 caracteres."),
  body('apellido').isLength({ min: 2 }).withMessage("El Apellido debe tener almenos 2 caracteres."),
  body('ubicacion').notEmpty().withMessage('La ubicación es obligatoria.'),
  body('email').isEmail().withMessage('Debe ser un Email valido.'),
body("descripcion").notEmpty().withMessage("La Descripcion es obligatoria."),
  body('password').isLength({ min: 8 }).withMessage("La Contraseña debe tener almenos 8 caracteres."),
  body('imagen').custom((value,{req}) =>{
  let file = req.file;
  
  let acceptedExtensions = ['.jpg','.png','.gif',".jpeg"];
  if(!file){
    
    throw new Error('Tienes que subir una imagen.');
  }else{
    
    let fileExtension = path.extname(file.originalname)
    if(!acceptedExtensions.includes(fileExtension)){
    throw new Error ('Las extensiones no compatibles.')
  }}
    return true;
  })]

  module.exports = validaciones