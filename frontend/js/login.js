function validacion() {
    user = document.getElementById("inputUser").value;
    pass = document.getElementById("inputPassword").value;
    if(user == null || user.length == 0 || /^\s+$/.test(user)) {
        alert('[ERROR] El campo usuario debe llenarse.');
        return false;
    } else if(pass == null || pass.length == 0 || /^\s+$/.test(pass)) {
        alert('[ERROR] El campo contraseña debe llenarse.');
        return false;
    }
    alert('Datos llenados correctamente.');
    return true;
}