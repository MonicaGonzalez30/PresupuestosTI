const sequelize = require('../db/conexion');

module.exports = class passwordModel {
    constructor(user){
        this.user = user;
    }
    async update (user){
        let result = await sequelize.query("SELECT [user] FROM users WHERE [user] = '" + user.user + "' AND [password] = '" + user.password + "'");
        if(result[0][0] != undefined){
            let result = await sequelize.query("UPDATE users SET [password] = '" + user.newPassword + "' WHERE [user] = '" + user.user + "';");
            return result;
        } else {
            return "";
        }
    }
}