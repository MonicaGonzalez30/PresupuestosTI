const jwt = require('jsonwebtoken');
const loginModel = require('../model/loginModel')

module.exports.login = async (user) => {
    let login = new loginModel();
    let data = await login.find(user);
    
    if (data) {
        console.log("Data:"+data)
        let token = jwt.sign({data},process.env.SECRETKEY);
        return token;
    } else {
        return false;
    }
}