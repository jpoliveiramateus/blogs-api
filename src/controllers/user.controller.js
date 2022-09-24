const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const { userService } = require('../services');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const id = await userService.create({ displayName, email, password, image });

  if (!id) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const token = jwt.sign({ id }, JWT_SECRET, {});

  return res.status(201).json({ token });
};

module.exports = {
  create,
};