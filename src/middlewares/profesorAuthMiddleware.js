function profesorAuthMiddleware(req,res,next){
    if(req.session.userLogged.id_categoria !== 2 ){
   return res.redirect("/users/profile")
    }
    next()
   }
   
   module.exports = profesorAuthMiddleware