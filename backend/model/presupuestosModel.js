const sequelize = require('../db/conexion');

module.exports = class presupuestosModel {
    constructor(presupuesto){
        this.presupuesto = presupuesto;
    }
    async list (){
        let result = await sequelize.query("SELECT * FROM budgets");
        return result[0];
    }
    
    async createPresu (presupuesto){
        let result = await sequelize.query("INSERT INTO budgets (creationDate,project,[version]) VALUES ('" + presupuesto.creationDate + "','" + presupuesto.project + "'," + presupuesto.version + ");");
        return result;
    }
    
    async delete (budgetId){
        let result = await sequelize.query("SELECT * FROM budgets WHERE idBudget = " + budgetId);
        if(result[0][0] != undefined){
            let result = await sequelize.query("DELETE FROM budgets WHERE idBudget = " + budgetId);
            return result;
        } else {
            return "";
        }
    }
}