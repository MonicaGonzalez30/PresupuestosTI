const presupuestosModel = require('../model/presupuestosModel');

module.exports.listaPresupuestos = async () => {
    let response = new presupuestosModel();
    let result = await response.list();
    return result;
}