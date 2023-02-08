window.addEventListener("load",()=>{

    const formularioLogin =document.getElementById("formularioLogin") 

formularioLogin.addEventListener("submit",(e)=>{
//VALIDACION EMAIL
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
//VALIDACION CONTRASEÑA
let erroresPassword = []
let campoPassword = document.getElementById("campoPassword")
if(campoPassword.value == ""){
erroresPassword.push("La Contraseña es obligatoria")

}
if(campoPassword.value.length < 8){
    erroresPassword.push("La Contraseña debe tener almenos 8 caracteres")
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