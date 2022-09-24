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

const getAll = async (_req, res) => {
  const users = await userService.getAll();

  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const user = await userService.getById(id);

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(user);
};

module.exports = {
  create,
  getAll,
  getById,
};