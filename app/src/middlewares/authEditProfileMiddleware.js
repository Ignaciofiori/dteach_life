const db = require("../database/models")
async function authEditProfileMiddleware(req,res,next){
    let usuarioAEditar = await db.Usuario.findOne({where:{ id: req.params.id}})
  if(req.session.userLogged){
if(usuarioAEditar.id ==req.session.userLogged.id ){


}
else{
    return res.redirect("/users/login")
}


  }else{
    return res.redirect("/users/login")

  }



next()
}

module.exports= authEditProfileMiddleware