const prespuestosController = require('../controller/presupuestosController')

module.exports = async (app) => {
    //Mostrar presupuestos
    app.get('/presupuestos',async(req,res) => {
        res.send(await prespuestosController.listaPresupuestos());
    });

    //Crear presupuesto
    app.post('/createPresupuesto',async(req,res) => {
        let presupuesto = req.body;
        console.log("Esto es el res.send: "+await prespuestosController.createPresupuesto(presupuesto));
        res.send(await prespuestosController.createPresupuesto(presupuesto));
    });

    //Mostrar toda la información del presupuesto


    //Modificar el presupuesto
    app.post('/updatePresupuesto',async(req,res) => {
        let presupuesto = req.body;
        res.send(await productController.updatePresupuesto(presupuesto));
    });

    //Eliminar presupuesto
    app.delete('/deletePresupuesto/:id',async (req, res) => {
        let budgetId = req.params.id
        res.send(await prespuestosController.deletePresupuesto(budgetId));
    })
};