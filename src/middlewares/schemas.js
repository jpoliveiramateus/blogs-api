const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'Some required fields are missing',
    'any.required': 'Invalid fields',
  }),
  password: Joi.string().required().messages({
    'string.empty': 'Some required fields are missing',
    'any.required': 'Invalid fields',
  }),
});

const createUserSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

module.exports = {
  loginSchema,
  createUserSchema,
};