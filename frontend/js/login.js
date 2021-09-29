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
    let token = await fetch('http://localhost:3000/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(login)
    });
    if (token != undefined) {
        let cookie = token;
        document.cookie = "token = "+cookie+"; max-age = 3600; path = /";
        //localStorage.setItem("token",token)
    } else{
        alert("El usuario o contraseña son incorrectos.");
    }
}