const Joi =require("@hapi/Joi");


const schema = {
    signup: Joi.object().keys({
        userid : Joi.string().required(),
        name : Joi.string().required(),            
        email:Joi.string().email().required(),
        age:Joi.number().required(),
        phoneNo:Joi.number().required(),
        occupation:Joi.string().required(),
        status:Joi.number(),
        role : Joi.number(),
    }),

  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),

}

module.exports= schema;