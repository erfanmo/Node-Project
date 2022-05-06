const Joi = require('joi');

const schema = Joi.object({
    Zinc: Joi.number()
        .min(3)
        .max(30)
        .required(),

    "Vitamin D3": Joi.number()
        .min(3)
        .max(30)
        .required(),

    "Omega-3": Joi.number()
        .min(3)
        .max(30)
        .required()
})

module.exports = schema;