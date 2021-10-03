const passwordModel = require('../model/newPassModel')

module.exports.updatePassword = async (user) => {
    let response = new passwordModel();
    let result = await response.update(user);
    if (result != "") {
        return "Se ha cambiado la contraseña correctamente.";
    } else {
        return "El usuario o contraseña actuales son incorrectos."
    }
}