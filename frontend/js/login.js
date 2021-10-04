const { and } = require("sequelize/types");

function validacion() {
    user = document.getElementById("inputUser").value;
    pass = document.getElementById("inputPassword").value;
    if(user == null || user.length == 0 || /^\s+$/.test(user)) {
        alert('ERROR: El campo usuario debe llenarse.');
        return false;
    } else if(pass == null || pass.length == 0 || /^\s+$/.test(pass)) {
        alert('ERROR: El campo contraseña debe llenarse.');
        return false;
    }
    return true;
}

async function login(){
    user = document.getElementById("inputUser").value;
    password = document.getElementById("inputPassword").value;
    let login = {
        user:user,
        password:password
    };   
    let url = await fetch('http://localhost:3000/login', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
    });
    //Regreso del token
    const data = await url.json();
    console.log(data.token);
    if (data.token != "Usuario no autenticado." && data.token != undefined) {
        localStorage.setItem('Presupuestos_token',JSON.stringify(data.token)) //Manda el token al local storage
       // console.log( 'token again', await JSON.parse(localStorage.getItem('Presupuestos_token')))//Obtiene el token desde el local storage
        window.location="./index.html"; //Redirigir a la pagina
    } else {
        alert("Usuario o contraseña incorrectos.")
    }
}