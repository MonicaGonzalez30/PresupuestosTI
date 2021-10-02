const loginController = require('../controller/loginController')
const validation = require('../middleware/validation')

module.exports = async (app) => {
    app.post('/login',validation.loginValidation,async(req,res) => {
        let user = req.body;
        let token = await loginController.login(user);
    
        res.send({'token':token});
        console.log(token);
    });
};