const db = require("../database/models")
async function userLoggedMiddleware(req,res,next){
res.locals.isLogged = false
let emailCookie= req.cookies.emailUsuario
if(req.cookies.emailUsuario){
    let usuarioCookie = await db.Usuario.findOne({where:{ email: emailCookie}})
    if(usuarioCookie){
        req.session.userLogged = usuarioCookie
    }
    }

if(req.session && req.session.userLogged){
    res.locals.isLogged = true
    res.locals.userLogged = req.session.userLogged
}


next()
}

module.exports= userLoggedMiddleware