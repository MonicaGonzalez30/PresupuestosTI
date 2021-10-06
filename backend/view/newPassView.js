const passwordController = require('../controller/newPassController')
const validation = require('../middleware/validation')

module.exports = async (app) => {
    app.post('/newPassword',validation.newPassValidation,validation.autenticarCambioC,async(req,res) => {
        let user = req.body;
        let resp = await passwordController.updatePassword(user);

        res.send(resp);
        console.log(resp);
    });
};