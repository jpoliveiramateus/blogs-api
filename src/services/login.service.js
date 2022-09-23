const { User } = require('../models');

const getUser = async ({ email, password }) => {

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return false;
  }

  if (user.password !== password) {
    return false;
  }

  return user.id;
};

module.exports = {
  getUser,
}