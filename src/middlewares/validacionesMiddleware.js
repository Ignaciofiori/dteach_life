const {body}= require('express-validator');
const validaciones = [
    body('nombre').notEmpty().withMessage('falta el Nombre'),
    body('apellido').notEmpty().withMessage('falta el Apellido'),
    body('ubicacion').notEmpty().withMessage('falta la ubicación'),
    body('email').notEmpty().withMessage('falta el email'),
    body('password').notEmpty().withMessage('falta el password'),
  ]

  module.exports = validaciones