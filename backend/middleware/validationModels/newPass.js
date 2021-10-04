const Joi = require('joi');

module.exports = {
    passwordModel : Joi.object().keys({
        user: Joi.string().alphanum().min(6).max(30).required(),
        password: Joi.string().min(8).max(50).required(),
        newPassword: Joi.string().min(8).max(50).required()
    }).with('user','password','newPassword')
}

/*const passwordModel = Joi.object().keys({
    user: Joi.string().alphanum().min(6).max(30).required(),
    password: Joi.string().min(8).max(50).required(),
    newPassword: Joi.string().min(8).max(50).required()
}).with('user','password','newPassword')

module.exports = passwordModel;*/