const { categoriesService } = require('../services');

const create = async (req, res) => {
  const { name } = req.body;

  const category = await categoriesService.create({ name });

  if (!category) {
    return res.status(409).json({ message: 'Category already registered' });
  }

  return res.status(201).json(category);
};

module.exports = {
  create,
};