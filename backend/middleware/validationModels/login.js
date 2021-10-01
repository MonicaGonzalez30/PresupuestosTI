const Joi = require('joi');

module.exports = {
    loginModel : Joi.object().keys({
        user: Joi.string().min(6).max(30).required(),
        password: Joi.string().min(8).max(50).required()
    }).with('user','password')
}