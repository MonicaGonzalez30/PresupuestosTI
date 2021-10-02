const Joi = require('joi');
const {loginModel} = require('./validationModels/login');

module.exports.loginValidation = async function(req,res,next){
    try {
        await Joi.attempt(req.body, loginModel, "Los datos ingresados no son correctos para el login.")
        return next();
    } catch (error) {
        console.log("Error de validation "+error);
        res.status(500).json({error: error.message})
    }
}