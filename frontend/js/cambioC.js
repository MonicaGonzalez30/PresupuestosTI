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
    //Regreso de la respuesta
    const data = await url.text();
    if (data != "El usuario o contraseña actuales son incorrectos.") {
        alert("Se ha cambiado la contraseña correctamente.")
        window.location="./index.html"; //Redirigir a la pagina
    } else {
        alert("El usuario o contraseña actuales son incorrectos.")
    }
}

function cancelar(){
    window.location="./index.html"; //Redirigir a la pagina
}