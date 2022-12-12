const fs = require("fs")
const path=require("path")

const User = {   
    getData:function(){
let usuarios = JSON.parse(fs.readFileSync(path.join(__dirname,"../database/users.json"),"utf-8"))
return usuarios
    },
    findAll:function(){
return this.getData()
},
    findByPk:function(id){
let usuarios = this.findAll()
let usuarioEncontrado= usuarios.find(usuario=> usuario.id == id)
return usuarioEncontrado
},
    generateId:function(){
let usuarios = this.findAll()
let ultimoUsuario = usuarios.pop()
if(ultimoUsuario){
return ultimoUsuario.id +1
} else{ 
    return 1
}
},
    create:function(userData){
        let usuarios = this.findAll();
        let usuarioNuevo ={
            id: this.generateId(),
            ...userData
        }
        usuarios.push(usuarioNuevo);
        fs.writeFileSync(path.join(__dirname,"../database/users.json"),JSON.stringify(usuarios,null," "));
        return usuarioNuevo 
    },
    delete:function(id){
        let usuarios = this.findAll()
        let usuariosFinales = usuarios.filter(usuario=>usuario.id !==id)
        fs.writeFileSync(path.join(__dirname,"../database/users.json"),JSON.stringify(usuariosFinales,null," "));
        return true
    }
}


module.exports= User