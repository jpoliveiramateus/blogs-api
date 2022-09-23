const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const { login } = require('../services');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  const userId = await login.getUser({ email, password });

  if (!userId) {
    return res.status(400).json({ message: "Invalid fields" });
  }

  const token = jwt.sign({ userId }, JWT_SECRET, {});

  return res.status(200).json({ token });
};