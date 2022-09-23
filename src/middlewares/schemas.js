const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': "Some required fields are missing",
    'any.required': "Invalid fields"
  }),
  password: Joi.string().required().messages({
    'string.empty': "Some required fields are missing",
    'any.required': "Invalid fields"
  }),
});

module.exports = {
  loginSchema,
};