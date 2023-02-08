const path= require("path")
const {body}= require('express-validator');

const validaciones=[
    body('nombre_profesor').isLength({ min: 5 }).withMessage("El Nombre debe tener almenos 5 caracteres."),
    body('ubicacion').notEmpty().withMessage("La Ubicacion es Obligatoria"),
    body('precio').notEmpty().withMessage("El Precio es Obligatorio"),
    body('descripcion').isLength({ min: 20 }).withMessage("La Descripcion debe tener almenos 20 caracteres."),
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
        })
]

module.exports = validaciones