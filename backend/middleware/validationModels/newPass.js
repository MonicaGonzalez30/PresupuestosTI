const Joi = require('joi');

module.exports = {
    passwordModel : Joi.object().keys({
        user: Joi.string().alphanum().min(6).max(30).required(),
        password: Joi.string().min(8).max(50).required(),
        newPassword: Joi.string().min(8).max(50).required()
    }).with('user',['password','newPassword'])
    /*.with('user','password')    Permite validar más de 2 datos con varios with
      .with('password','newPassword')*/
}