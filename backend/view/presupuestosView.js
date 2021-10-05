const prespuestosController = require('../controller/presupuestosController')

module.exports = async (app) => {
    //Mostrar productos
    app.get('/presupuestos',async(req,res) => {
        res.send(await prespuestosController.listaPresupuestos());
    });
};