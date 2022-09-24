const Joi = require('joi');

const MSG_SOME_REQUIRED = 'Some required fields are missing';

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': MSG_SOME_REQUIRED,
    'any.required': 'Invalid fields',
  }),
  password: Joi.string().required().messages({
    'string.empty': MSG_SOME_REQUIRED,
    'any.required': 'Invalid fields',
  }),
});

const createUserSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const createCategorySchema = Joi.object({
  name: Joi.string().min(2).required(),
});

const createPostSchema = Joi.object({
  title: Joi.string().min(2).required().messages({
    'string.empty': MSG_SOME_REQUIRED,
  }),
  content: Joi.string().min(5).required().messages({
    'string.empty': MSG_SOME_REQUIRED,
  }),
  categoryIds: Joi.array().required(),
});

const updatePostSchema = Joi.object({
  title: Joi.string().min(2).required().messages({
    'string.empty': MSG_SOME_REQUIRED,
  }),
  content: Joi.string().min(5).required().messages({
    'string.empty': MSG_SOME_REQUIRED,
  }),
});

module.exports = {
  loginSchema,
  createUserSchema,
  createCategorySchema,
  createPostSchema,
  updatePostSchema,
};