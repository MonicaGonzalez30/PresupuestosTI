const loginController = require('../controller/loginController')
const validation = require('../middleware/validation')

module.exports = async (app) => {
    app.post('/login',validation.loginValidation,async(req,res) => {
        let user = req.body;
        let resp = await loginController.login(user);
        res.send(resp);
    });
};