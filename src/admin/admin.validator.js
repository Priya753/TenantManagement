
const Joi =require("@hapi/Joi");


const schema = {
    adduser: Joi.object().keys({
        PropertyName : Joi.string(),
        address : Joi.string(),            
        rentamount:Joi.number(),
        rentDate:Joi.date(),
        tenant_members:Joi.string(),
       lock_in_period:Joi.string(),
        deposit:Joi.number(),
        due_payment:Joi.number(),
        duedate : Joi.date(),
        rent_received:Joi.number() 
    }),

}

module.exports= schema;