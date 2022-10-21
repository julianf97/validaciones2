// Variables y Constantes
const botonLogin = document.getElementById("btnlogin");
const botonSign = document.getElementById("btnsign");
const pantallaNegra = document.getElementById("contenedorlogin");
const pantallaNegraSign = document.getElementById("contenedorsign");
const contenedorModal = document.getElementById("contenedormodal");
const contenedorModalSign = document.getElementById("contenedormodalsign");
const modalOpenSign = document.querySelector(".modal-open-sign");
const modalOpenLogin = document.querySelector(".modal-open-login");
const modalOpenError = document.querySelector(".modal-open-error");
const modalLogin = document.getElementById("modallogin");
const modalSign = document.getElementById("modalsign");
const botonCruz = document.getElementById("botonSalirFormulario");
const botonCruzSign = document.getElementById("salirSign");
const cuadradoRecuerdame = document.getElementById("checkcuadrado");
const labelRecuerdame = document.getElementById("recuerdamecuadrado");
const rellenoCheck = document.getElementById("rellenoCuadrado");
const containerMenu = document.getElementById("containermenu");
const formulario = document.getElementById("formulario");
const nombreSign = document.getElementById("firstname");
const apellidoSign = document.getElementById("lastname");
const mailSign = document.getElementById("mailsign");
const labelMailSign = document.getElementById("labelmailsign");
const labelUserName = document.getElementById("labelusername")
const userNameSign = document.getElementById("username");
const contraseniaSign = document.getElementById("password");
const errorNombre = document.getElementById("errorfirstname");
const errorApellido = document.getElementById("errorlastname")
const errorCorreo = document.getElementById("errorcorreo");
const errorUser = document.getElementById("erroruser");
const cruzErrorMail = document.getElementById("cruzerrormail");
const cruzErrorNombre = document.getElementById("cruzerrorfirstname");
const cruzErrorApellido = document.getElementById("cruzerrorlastname");
const cruzErrorUser = document.getElementById("cruzerroruser");
const cruzErrorPassword = document.getElementById("cruzerrorpassword");
const btnJoinFree = document.getElementById("btnfree");
const body = document.querySelector("body");


// Eventos para abrir el modal

botonLogin.addEventListener("click", ()=>{
    pantallaNegra.classList.toggle('modal-open-login');
    body.style.overflow = "hidden";
});


const clickRecuerdame = () => {
    
    const estadoCheck = {mostrar: true}
    
    cuadradoRecuerdame.addEventListener( "click", () =>{
        if(estadoCheck.mostrar){
            rellenoCheck.style.opacity = 0;
            estadoCheck.mostrar = false;
        } else{
            rellenoCheck.style.opacity = 1;
            estadoCheck.mostrar = true;
        }
    })

    labelRecuerdame.addEventListener("click", () =>{
        if(estadoCheck.mostrar){
            rellenoCheck.style.opacity = 0;
            estadoCheck.mostrar = false;
        } else{
            rellenoCheck.style.opacity = 1;
            estadoCheck.mostrar = true;
        }
    })
    
}

botonSign.addEventListener("click", ()=>{
    pantallaNegraSign.classList.toggle('modal-open-sign');
    body.style.overflow = "hidden";
}); 

botonCruz.addEventListener("click", ()=>{
    pantallaNegra.classList.remove('modal-open-login');
    body.style.overflow = "auto";
});

botonCruzSign.addEventListener("click", ()=>{
    pantallaNegraSign.classList.remove('modal-open-sign');
    body.style.overflow = "auto";
});

const salirModal = () => {
    document.addEventListener('click', (event) => {
        const boolIsOutside = document.getElementById("contenedorlogin").isSameNode(event.target);
        const boolIsOutside2 =  document.getElementById("contenedorsign").isSameNode(event.target);
        if (boolIsOutside) {
            pantallaNegra.classList.remove('modal-open-login');
            body.style.overflow = "auto";
        }
        if (boolIsOutside2) {
            pantallaNegraSign.classList.remove('modal-open-sign');
            body.style.overflow = "auto";
        }
    })
}

salirModal();
clickRecuerdame();

// Guardando datos

//Sign Up
class Usuario{
   
    constructor(firstName,lastName,email,username,password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.password = password;
    }
}

const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || []

btnJoinFree.addEventListener("click", () => {
    let primerNombre = nombreSign.value;
    let apellido = apellidoSign.value;
    let correoElectronico = mailSign.value;
    let nombreDeUsuario = userNameSign.value;
    let contrasenia = contraseniaSign.value;
    const nuevoUsuario = new Usuario(primerNombre,apellido,correoElectronico,nombreDeUsuario,contrasenia);

    const existeCorreo = listaUsuarios.some(u => u.email === correoElectronico);
    const existeUsuario = listaUsuarios.some(i => i.username === nombreDeUsuario);

    if((existeCorreo || existeUsuario )){
       
        pantallaNegraSign.classList.toggle('.modal-open-error')

        if(existeCorreo && existeUsuario){
            errorCorreo.style.visibility = "visible";
            cruzErrorMail.style.visibility = "visible";
            errorUser.style.visibility = "visible";
            cruzErrorUser.style.visibility = "visible";
        }else if(existeCorreo){
            errorCorreo.style.visibility = "visible";
            cruzErrorMail.style.visibility = "visible";
            errorUser.style.visibility = "hidden";
            cruzErrorUser.style.visibility = "hidden";
        } else if(existeUsuario){
            errorUser.style.visibility = "visible";
            cruzErrorUser.style.visibility = "visible";
            errorCorreo.style.visibility = "hidden";
            cruzErrorMail.style.visibility = "hidden";
        }

    } else if (primerNombre.length !== isNaN){
        pantallaNegraSign.classList.toggle('.modal-open-error');
        errorNombre.style.visibility = "visible";
        cruzErrorNombre.style.visibility = "visible";

    } else {
        listaUsuarios.push(nuevoUsuario);
        errorCorreo.style.visibility = "hidden";
        cruzErrorMail.style.visibility = "hidden";
        errorUser.style.visibility = "hidden";
        cruzErrorUser.style.visibility = "hidden";
        pantallaNegraSign.classList.remove('modal-open-sign')
    }

    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        formulario.reset();
    });

    
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    return listaUsuarios;
});
