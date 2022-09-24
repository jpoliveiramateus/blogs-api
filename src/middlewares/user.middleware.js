const schemas = require('./schemas');

const validateCreateUser = async (req, res, next) => {
  const { error } = schemas.createUserSchema.validate(req.body);

  if (error) {
    return res
      .status(400)
      .json({ message: error.message });
  }

  next();
};

module.exports = {
  validateCreateUser,
};