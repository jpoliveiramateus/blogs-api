const { User } = require('../models');

const create = async ({ displayName, email, password, image }) => {
  const user = await User.findOne({ where: { email } });

  if (user) {
    return false;
  }
  
  const userCreated = await User.create({ displayName, email, password, image });
  
  return userCreated.id;
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  return user;
};

const deleteUser = async (id) => {
  try {
    await User.destroy({ where: { id } });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = {
  create,
  getAll,
  getById,
  deleteUser,
};
