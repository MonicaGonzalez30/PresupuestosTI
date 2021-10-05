async function logOut(){
    let token = await JSON.parse(localStorage.getItem('Presupuestos_token')); //Obtencion del token
    if (token != undefined) {
        localStorage.removeItem('Presupuestos_token');
        alert("Ha cerrado sesión");
        window.location="./login.html";
    } else{
        alert("Su sesión ha caducado.");
        window.location="./login.html";
    }
}

function nuevo(){
    window.location="./nuevo.html"; //Redirigir a la pagina
}

function aceptarEnv(){
    alert("Enviado correctamente.");
}

function aceptarElim(){
    alert("Eliminado correctamente.");
}