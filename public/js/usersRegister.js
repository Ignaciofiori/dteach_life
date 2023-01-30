
window.addEventListener("load",()=>{

let formularioRegister = document.getElementById("register")
//VALIDACIONES DEL CAMPO NOMBRE
formularioRegister.addEventListener("submit",(e)=>{

let erroresNombre = []
let campoNombre = document.getElementById("campoNombre")
if(campoNombre.value == ""){
erroresNombre.push("El nombre es obligatorio")

}else if(campoNombre.value.length < 2){
    erroresNombre.push("El Nombre debe tener que almenos 2 caracteres")
}

if(erroresNombre.length > 0){
    e.preventDefault()
    let ulErroresNombre= document.querySelector(".nombre ul")
    for(let i=0 ;i<erroresNombre.length;i++){
        ulErroresNombre.innerHTML="<li>"+erroresNombre[i]+"</li>"
    }    
    campoNombre.style.border="red solid 3px"
}
//VALIDACIONES APELLIDO
let erroresApellido = []
let campoApellido = document.getElementById("campoApellido")

if(campoApellido.value == ""){
erroresApellido.push("El Apellido es obligatorio")

}else if(campoApellido.value.length < 2){
    erroresApellido.push("El Apellido debe tener que almenos 2 caracteres")
}
if(erroresApellido.length > 0){
    e.preventDefault()
    let ulErroresApellido= document.querySelector(".apellido ul")
    for(let i=0 ;i<erroresApellido.length;i++){
        ulErroresApellido.innerHTML="<li>"+erroresApellido[i]+"</li>"
    }    
    campoApellido.style.border="red solid 3px"
}
//VALIDACIONES UBICACION
let erroresUbicacion = []
let campoUbicacion = document.getElementById("campoUbicacion")
if(campoUbicacion.value == ""){
erroresUbicacion.push("La Ubicacion es obligatoria")
}
if(erroresUbicacion.length > 0){
    e.preventDefault()
    let ulErroresUbicacion= document.querySelector(".ubicacion ul")
    for(let i=0 ;i<erroresUbicacion.length;i++){
        ulErroresUbicacion.innerHTML="<li>"+erroresUbicacion[i]+"</li>"
    }    
    campoUbicacion.style.border="red solid 3px"
}
//VALIDACIONES Descripcion
let erroresDescripcion = []
let campoDescripcion = document.getElementById("campoDescripcion")
if(campoDescripcion.value == ""){
erroresDescripcion.push("La Descripcion es obligatoria")
}
if(erroresDescripcion.length > 0){
    e.preventDefault()
    let ulErroresDescripcion= document.querySelector(".descripcionError ul")
    for(let i=0 ;i<erroresDescripcion.length;i++){
        ulErroresDescripcion.innerHTML="<li>"+erroresDescripcion[i]+"</li>"
    }
    campoDescripcion.style.border="red solid 3px"
}
   
//VALIDACIONES IMAGEN
let erroresImagen = []
let campoImagen = document.getElementById("campoImagen")
let acceptedExtensions = ["png","jpeg","gif","jpg"]
const obtenerExtension = (archivo)=>{
    return archivo.split(".").pop()
}

if(campoImagen.value == ""){
 erroresImagen.push("Tienes que subir una Imagen")
}
 else if(!acceptedExtensions.includes(obtenerExtension(campoImagen.value))) {
    erroresImagen.push('Las extensiones no son compatibles.')   
}
if(erroresImagen.length > 0){
    
    e.preventDefault()
    let ulErroresImagen= document.querySelector(".imagen ul")
    for(let i=0 ;i<erroresImagen.length;i++){
        ulErroresImagen.innerHTML="<li>"+erroresImagen[i]+"</li>"
    }
    campoImagen.style.border="red solid 3px"

} 
//VALIDACIONES EMAIL 

let erroresEmail = []
let campoEmail = document.getElementById("campoEmail")

if(campoEmail.value == ""){
erroresEmail.push("El Email es obligatorio")
}

if(erroresEmail.length > 0){
    e.preventDefault()
    let ulErroresEmail= document.querySelector(".email ul")
    for(let i=0 ;i<erroresEmail.length;i++){
        ulErroresEmail.innerHTML="<li>"+erroresEmail[i]+"</li>"
    }
    campoEmail.style.border="red solid 3px"
}
//VALIDACIONES CONTRASEÑA
let erroresPassword = []
let campoPassword = document.getElementById("campoPassword")
let campoPassword2= document.getElementById("campoPassword2")
if(campoPassword.value == ""){
erroresPassword.push("La Contraseña es obligatoria")
}else if(campoPassword.value.length < 8){
    erroresPassword.push("La Contraseña debe tener almenos 8 caracteres")
}else if(campoPassword2.value == ""){
    erroresPassword.push("Debes Verificar la contraseña")
}else if(campoPassword2.value != campoPassword.value ){
    erroresPassword.push("Las contraseñas no coinciden")
}

if(erroresPassword.length > 0){
    e.preventDefault()
    let ulErroresPassword= document.querySelector(".password ul")
    for(let i=0 ;i<erroresPassword.length;i++){
        ulErroresPassword.innerHTML="<li>"+erroresPassword[i]+"</li>"
    }
    campoPassword.style.border="red solid 3px"
}
})

})

