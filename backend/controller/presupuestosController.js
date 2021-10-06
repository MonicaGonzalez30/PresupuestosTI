const presupuestosModel = require('../model/presupuestosModel');

module.exports.listaPresupuestos = async () => {
    let response = new presupuestosModel();
    let result = await response.list();
    return result;
}

module.exports.createPresupuesto = async (presupuesto) => {
    let response = new presupuestosModel();
    let result = await response.createPresu(presupuesto);
    return "Producto creado.";
}

module.exports.deletePresupuesto = async (budgetId) => {
    let response = new presupuestosModel();
    let result = await response.delete(budgetId);
    if (result != '') {
        return "Presupuesto eliminado.";
    } else {
        return "El presupuesto no existe."
    }
}