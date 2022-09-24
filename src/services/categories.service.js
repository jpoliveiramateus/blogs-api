const { Category } = require('../models');

const create = async ({ name }) => {
  const category = await Category.findOne({ where: { name } });

  if (category) {
    return false;
  }

  const categoryCreated = await Category.create({ name });
  const categoryFound = await Category.findOne({ where: { name: categoryCreated.name } });

  return categoryFound;
};

const getAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = {
  create,
  getAll,
};