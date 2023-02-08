const db = require("../database/models")
async function authProductEditMiddleware(req,res,next){
    let productoAEditar = await db.Clase.findOne({where:{ id: req.params.id}})
  if(productoAEditar){
    if(req.session.userLogged){

if(productoAEditar.idProfesor == req.session.userLogged.id ){

}
else{
    return res.redirect("/")
}
    }else{
        return res.redirect("/users/login")
    }

  }else{
    return res.redirect("/")

  }



next()
}
module.exports = authProductEditMiddleware