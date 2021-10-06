const prespuestosController = require('../controller/presupuestosController')

module.exports = async (app) => {
    //Mostrar presupuestos
    app.get('/presupuestos',async(req,res) => {
        res.send(await prespuestosController.listaPresupuestos());
    });

    //Crear presupuesto


    //Mostrar toda la información del presupuesto


    //Modificar el presupuesto


    //Eliminar presupuesto
    app.delete('/deletePresupuesto/:id',async (req, res) => {
        let budgetId = req.params.id
        console.log("Esto es el res.send: "+await prespuestosController.deletePresupuesto(budgetId));
        res.send(await prespuestosController.deletePresupuesto(budgetId));
    })
};