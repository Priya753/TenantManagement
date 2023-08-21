const Joi =require("@hapi/Joi");


const schema = {
    book_now:{
        move_in_date:Joi.date(),
        date:Joi.date(),
        name:Joi.string(),
        email:Joi,
        gender:Joi.string(),
        taken_amount:Joi.number(),
        schedule_visit:Joi.string(),
        amenities:Joi.string(),
    },
    info:{
        TenantName : Joi.string(),
        propertyName : Joi.string(),
        address: Joi.string(),
        PropertyName:  Joi.string(),
        rentamount:Joi.number(),
        rentDate:Joi.date(),
        tenant_members:Joi.string(),
        lock_in_period: Joi.string(),
        deposit:Joi.number(),
        due_payment : Joi.number(),
        duedate: Joi.date(),
        rent_received : Joi.number(),
    }

}

module.exports= schema;