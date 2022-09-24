const { User } = require('../models');

const create = async ({ displayName, email, password, image }) => {
  const user = await User.findOne({ where: { email } });

  if (user) {
    return false;
  }
  
  const userCreated = await User.create({ displayName, email, password, image });
  const { id } = await User.findOne({ where: { email: userCreated.email } });
  
  return id;
};

module.exports = {
  create,
};
