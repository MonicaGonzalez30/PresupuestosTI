async function cambiar(){
    let user = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    let newPassword = document.getElementById("nuevaC").value;
    let token = await JSON.parse(localStorage.getItem('Presupuestos_token'))//Obtiene el token desde el local storage
    console.log(token)

    if (token != null) {
        let nuevo = {
            user:user,
            password:password,
            newPassword:newPassword,
            token:token
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
        console.log(data)
        if (data != "El usuario o contraseña actuales son incorrectos.") {
            alert("Se ha cambiado la contraseña correctamente.")
            window.location="./index.html"; //Redirigir a la pagina
        } else {
            alert("El usuario o contraseña actuales son incorrectos.")
        }
    } else{
        alert("No puede realizar el cambio de contraseña. Su sesión ha cadudado.")
        window.location="./login.html";
    }
}

function cancelar(){
    window.location="./index.html"; //Redirigir a la pagina
}