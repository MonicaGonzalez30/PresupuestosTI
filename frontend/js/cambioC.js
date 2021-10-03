async function cambiar(){
    user = document.getElementById("user").value;
    password = document.getElementById("pass").value;
    newPassword = document.getElementById("nuevaC").value;
    let nuevo = {
        user:user,
        password:password,
        newPassword:newPassword
    };   
    let url = await fetch('http://localhost:3000/newPassword', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevo),
    });
    //Regreso del token
    // const data = await url.json();
    // console.log(data.token);
    // if (data.token != "Usuario no autenticado.") {
    //     localStorage.setItem('Presupuestos_token',JSON.stringify(data.token)) //Manda el token al local storage
    //    // console.log( 'token again', await JSON.parse(localStorage.getItem('Presupuestos_token')))//Obtiene el token desde el local storage
    //     window.location="./index.html"; //Redirigir a la pagina
    // } else {
    //     alert("El usuario o contraseña actuales son incorrectos.")
    // }
}

function cancelar(){
    window.location="./index.html"; //Redirigir a la pagina
}