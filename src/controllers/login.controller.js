const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const { loginService } = require('../services');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  const id = await loginService.getUser({ email, password });

  if (!id) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = jwt.sign({ id }, JWT_SECRET, {});

  return res.status(200).json({ token });
};