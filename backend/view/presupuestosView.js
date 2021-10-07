const prespuestosController = require('../controller/presupuestosController')

module.exports = async (app) => {
    //Mostrar presupuestos
    app.get('/presupuestos',async(req,res) => {
        res.send(await prespuestosController.listaPresupuestos());
    });

    //Crear presupuesto (Solo de la tabla budgets)
    app.post('/createPresupuesto',async(req,res) => {
        let presupuesto = req.body;
        res.send(await prespuestosController.createPresupuesto(presupuesto));
    });

    //Mostrar información del presupuesto (Solo de la tabla budgets)
    app.get('/presupuesto/:id',async(req,res) => {
        let budgetId = req.params.id
        console.log(await prespuestosController.findPresupuesto(budgetId))
        res.send(await prespuestosController.findPresupuesto(budgetId));
    });

    //Modificar el presupuesto (Solo de la tabla budgets, modifica la version)
    app.post('/updatePresupuesto',async(req,res) => {
        let presupuesto = req.body;
        res.send(await prespuestosController.updatePresupuesto(presupuesto));
    });

    //Eliminar presupuesto
    app.delete('/deletePresupuesto/:id',async (req, res) => {
        let budgetId = req.params.id
        res.send(await prespuestosController.deletePresupuesto(budgetId));
    })
};