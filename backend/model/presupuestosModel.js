const sequelize = require('../db/conexion');

module.exports = class presupuestosModel {
    constructor(presupuesto){
        this.presupuesto = presupuesto;
    }

    async list (){
        let result = await sequelize.query("SELECT * FROM budgets");
        return result[0];
    }
}