const schemas = require('./schemas');

const validateCreatePost = async (req, res, next) => {
  const { error } = schemas.createPostSchema.validate(req.body);

  if (error) {
    return res
      .status(400)
      .json({ message: error.message });
  }

  next();
};

module.exports = {
  validateCreatePost,
};