// thesick.html ESTE SERÁ LO ÚNICO QUE TENDRÁ DE JS LA PAGE: "thesick.html"
const reproductoraDeVideos = () => {
    const reproductorVideos = { 
        videoplay: {
            enlace: "https://www.youtube.com/watch?v=xc_mfqPS2LY",
            autoplay: function(){
                // Se ejecutará este video automaticamente cuando se ingresa a la page
            }
        },
        videosegundo:{
            enlace:"https://www.youtube.com/watch?v=wAqc_zfmML0",
            videoplay: function(){
                // Se ejecutará este video cuando se clickee sobre él

            }
        },
        videotercero:{
            enlace:"https://www.youtube.com/watch?v=LkJ5jJuraLQ",
            videoplay: function(){
                // Se ejecutará este video cuando se clickee sobre él
            }
        },
        videocuarto:{
            enlace:"https://www.youtube.com/watch?v=q5M8K2Jm2bE",
            videoplay: function(){
                // Se ejecutará este video cuando se clickee sobre él
            }
        }
    }
}

// index.html

//Sign Up
class Usuario{
   
    constructor(firstName,lastName,email,username,password,birthday){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.password = password;
    this.birthday = birthday;
    }
}

const usuarios = [];

// Esta función se ejecutará cuando se presione sobre el botón del menú que dice: "Sign Up"
const crearUsuario = () => {

    let primerNombre = prompt("Ingrese su primer nombre");
    let apellido = prompt("Ingrese su apellido");
    let correoElectronico = prompt("Ingrese su correo electronico");
    for(let u of usuarios) {
        while (u.email === correoElectronico) {
            correoElectronico = prompt("Ya existe un usuario con ese correo electronico, pruebe con otro");
        }     
    }
    let nombreDeUsuario = prompt("Ingrese su nombre del usuario");
    for(let e of usuarios) {
        while (e.username === nombreDeUsuario) {
            nombreDeUsuario = prompt("Ya existe un usuario con ese nombre, pruebe con otro");
        }     
    }
    let contrasenia = prompt("Ingrese su contraseña");
    
    let cumpleaños = prompt("Ingrese el año en que nació");
    const nuevoUsuario = new Usuario(primerNombre,apellido,correoElectronico,nombreDeUsuario,contrasenia,cumpleaños);

    usuarios.push(nuevoUsuario);
    return usuarios;
}

//Log In - Esta función se ejecutará cuando se presione sobre el botón del menú que dice: "Log In"
const logearse = () => { 
    let correo = prompt("Ingrese su correo electronico");
    let contrasenia = prompt("Ingrese su contraseña");
    for(let u of usuarios) {
        if (u.password === contrasenia && u.email === correo) {
            alert(`Bienvenido ${u.username}!.`);
           return u;
        } else {
            alert("Has ingresado incorrectamente tu correo electronico o tu contraseña.");
        }    
    }  
}



