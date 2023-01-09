// const User = require("../database/models/Usuario")
// function userLoggedMiddleware (req,res,next){
// res.locals.isLogged = false

// let emailInCookie =req.cookies.emailUsuario
// let usuarioCookie= User.findByField("email",emailInCookie)
// console.log(usuarioCookie)
 
// if(usuarioCookie){
//     req.session.userLogged = usuarioCookie
// }
// if(req.session && req.session.userLogged){
//     res.locals.isLogged = true
//     res.locals.userLogged = req.session.userLogged
// }


// next()
// }

//module.exports= userLoggedMiddleware