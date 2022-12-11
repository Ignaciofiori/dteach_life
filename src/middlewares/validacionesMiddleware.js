const {body}= require('express-validator');
const validaciones = [
    body('nombre').notEmpty().withMessage('Falta el Nombre'),
    body('apellido').notEmpty().withMessage('Falta el Apellido'),
    body('ubicacion').notEmpty().withMessage('Falta la Ubicación'),
    body('email').notEmpty().withMessage('Falta el Email'),
    body('password').notEmpty().withMessage('Falta la Contraseña'),
  ]

  module.exports = validaciones