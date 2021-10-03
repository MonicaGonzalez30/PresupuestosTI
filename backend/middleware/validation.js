const Joi = require('joi');
const {loginModel} = require('./validationModels/login');
const {passwordModel} = require('./validationModels/newPass');

module.exports.loginValidation = async function(req,res,next){
    try {
        await Joi.attempt(req.body, loginModel, "Los datos ingresados no son correctos para el login.")
        return next();
    } catch (error) {
        console.log("Error de validacion "+error);
        res.status(500).json({error: error.message})
    }
}

module.exports.newPassValidation = async function(req,res,next){
    try {
        await Joi.attempt(req.body, passwordModel, "Los datos ingresados no son correctos para el cambio de contraseña.")
        return next();
    } catch (error) {
        console.log("Error de validacion "+error);
        res.status(500).json({error: error.message})
    }
}