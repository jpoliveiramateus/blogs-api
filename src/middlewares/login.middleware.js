const schemas = require('./schemas');

const validateLogin = async (req, res, next) => {
  const { error } = schemas.loginSchema.validate(req.body);

  if (error) {
    return res
      .status(400)
      .json({ message: error.message });
  }

  next();
};

module.exports = {
  validateLogin,
};