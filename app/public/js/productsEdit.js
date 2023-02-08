window.addEventListener("load", ()=>{
    const formularioEdit = document.getElementById("formularioEdit")
    
    formularioEdit.addEventListener("submit",(e)=>{
    //VALIDACIONES NOMBRE_PROFESOR
    let erroresNombreProfesor=[]
    let campoNombreProfesor = document.getElementById("campoNombreProfesor")
    
    if(campoNombreProfesor.value == ""){
        erroresNombreProfesor.push("El Nombre es obligatorio")
    }else if(campoNombreProfesor.value.length < 5){
        erroresNombreProfesor.push("El Nombre debe tener almenos 5 caracteres")
    }
    if(erroresNombreProfesor.length > 0){
        e.preventDefault()
        let ulErroresNombreProfesor= document.querySelector(".nombreProfesor ul")
            for(let i=0 ;i<erroresNombreProfesor.length;i++){
                ulErroresNombreProfesor.innerHTML="<li>"+erroresNombreProfesor[i]+"</li>"
            }
            campoNombreProfesor.style.border="red solid 3px"
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
    
    //VALIDACIONES PRECIO
    let erroresPrecio = []
    let campoPrecio = document.getElementById("campoPrecio")
    if(campoPrecio.value == ""){
    erroresPrecio.push("El Precio es obligatorio")
    }
    if(erroresPrecio.length > 0){
        e.preventDefault()
        let ulErroresPrecio= document.querySelector(".precio ul")
        for(let i=0 ;i<erroresPrecio.length;i++){
            ulErroresPrecio.innerHTML="<li>"+erroresPrecio[i]+"</li>"
        }    
        campoPrecio.style.border="red solid 3px"
    }
    
    //VALIDACIONES DESCRIPCION
    let erroresDescripcion=[]
    let campoDescripcion = document.getElementById("campoDescripcion")
    
    if(campoDescripcion.value == ""){
        erroresDescripcion.push("La Descripcion es obligatoria")
    }else if(campoDescripcion.value.length < 20){
        erroresDescripcion.push("La Descripcion debe tener almenos 20 caracteres ")
    }
    if(erroresDescripcion.length > 0){
        e.preventDefault()
        let ulErroresDescripcion= document.querySelector(".errorDescripcion ul")
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
    })
    
    
})    